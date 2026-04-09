package hu.testacademy.api;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import hu.testacademy.api.pojo.AccountPojo;
import hu.testacademy.api.pojo.BranchDetails;
import java.util.Arrays;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

/**
 * Complex Banking API Workflow Test.
 * This simulates a real enterprise banking service environment.
 * All comments and logic are transitioned to English standard.
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class BankingWorkflowApiTest {

    // This will hold the dynamically generated Account ID to be used in subsequent requests.
    // This perfectly covers Stage 3 (Extraction)!
    private static String createdAccountId;

    @BeforeAll
    public static void setup() {
        // We are targeting our local Banking Mock API Server
        RestAssured.baseURI = "http://localhost:3000";
    }

    @Test
    @Order(1)
    public void test1_GetExistingAccountDetails() {
        // GET: Requesting an existing active VIP account (A1001)
        // Validating complex nested JSON objects and arrays.
        given()
            .header("X-API-KEY", "bank-internal-secret")
            .pathParam("accId", "A1001")
        .when()
            .get("/accounts/{accId}")
        .then()
            .statusCode(200)
            .body("customerName", equalTo("Daniel Tester"))
            .body("balance", greaterThan(100000.0f))
            .body("branchDetails.region", equalTo("Budapest")) // Nested object validation
            .body("flags", hasItem("VIP"));                    // Array validation
    }

    @Test
    @Order(2)
    public void test2_PostCreateNewAccount() {
        // LÉPÉS 6 - POJO (Szerializáció): A csúnya String-szerkesztés helyett létrehozzuk a fiókot Java objektumként:
        BranchDetails viennaBranch = new BranchDetails("BR-99", "Vienna");
        
        AccountPojo newAccount = new AccountPojo(
                "John Doe",                 // Név
                "CURRENT",                  // Típus
                50000.0,                    // Egyenleg
                "EUR",                      // Deviza
                "PENDING",                  // Státusz
                viennaBranch,               // A másik beágyazott objektum!
                Arrays.asList("NEW_CUSTOMER") // A string lista
        );

        // EXTRACTION (Kinyerés): Itt a varázslat! A `.body(newAccount)` egy az egyben a Java objektumot eszi meg.
        // A Jackson a háttérben hibátlan JSON szöveget csinál belőle, mielőtt elküldené!
        createdAccountId = given()
            .contentType(ContentType.JSON)
            .header("X-REQUEST-ID", "req-12345")
            .body(newAccount)
        .when()
            .post("/accounts")
        .then()
            .statusCode(201)
            .body("customerName", equalTo("John Doe"))
            .body("status", equalTo("PENDING"))
            .extract().path("id"); // Az azonosító kinyerése a válaszból a következő tesztek számára.

        System.out.println("✅ Successfully Created Account with ID: " + createdAccountId);
    }

    @Test
    @Order(3)
    public void test3_PutUpdateAccountKycData() {
        // PUT: The bank requires a full KYC update, so we replace the entire user object.
        // We use the ID extracted from the previous test to ensure persistence!
        String fullyUpdatedPayload = "{\n" +
                "  \"customerName\": \"John Doe KYC-Verified\",\n" +
                "  \"accountType\": \"CURRENT\",\n" +
                "  \"balance\": 50000.0,\n" +
                "  \"currency\": \"EUR\",\n" +
                "  \"status\": \"ACTIVE\",\n" +
                "  \"branchDetails\": {\n" +
                "    \"branchId\": \"BR-99\",\n" +
                "    \"region\": \"Vienna\"\n" +
                "  },\n" +
                "  \"flags\": [\"NEW_CUSTOMER\", \"KYC_APPROVED\"]\n" +
                "}";

        given()
            .contentType(ContentType.JSON)
            .pathParam("accId", createdAccountId) // Using extracted ID
            .body(fullyUpdatedPayload)
        .when()
            .put("/accounts/{accId}")
        .then()
            .statusCode(200)
            .body("customerName", equalTo("John Doe KYC-Verified"))
            .body("status", equalTo("ACTIVE"))
            .body("flags", hasItems("NEW_CUSTOMER", "KYC_APPROVED"));
    }

    @Test
    @Order(4)
    public void test4_PatchSuspendAccount() {
        // PATCH: A suspicious transaction occurred. We only update the "status" to SUSPENDED.
        // We do not touch the balance or any other user details.
        String patchPayload = "{\n" +
                "  \"status\": \"SUSPENDED\"\n" +
                "}";

        given()
            .contentType(ContentType.JSON)
            .pathParam("accId", createdAccountId)
            .body(patchPayload)
        .when()
            .patch("/accounts/{accId}")
        .then()
            .statusCode(200)
            .body("status", equalTo("SUSPENDED"))
            .body("customerName", equalTo("John Doe KYC-Verified")); // Verified that the name wasn't wiped!
    }

    @Test
    @Order(5)
    public void test5_DeleteFraudulentAccount() {
        // DELETE: Closing the account permanently.
        given()
            .pathParam("accId", createdAccountId)
        .when()
            .delete("/accounts/{accId}")
        .then()
            .statusCode(200);

        // Verification: The account must return 404 Not Found if we try to GET it after deletion.
        given()
            .pathParam("accId", createdAccountId)
        .when()
            .get("/accounts/{accId}")
        .then()
            .statusCode(404);
        
        System.out.println("✅ Successfully Verified Deletion for ID: " + createdAccountId);
    }
}
