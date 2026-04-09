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

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class BankingWorkflowApiTest {

    private static String createdAccountId;

    @BeforeAll
    public static void setup() {
        RestAssured.baseURI = "http://localhost:3000";
    }

    @Test
    @Order(1)
    public void test1_GetExistingAccountDetails() {
        given()
            .header("X-API-KEY", "bank-internal-secret")
            .pathParam("accId", "A1001")
        .when()
            .get("/accounts/{accId}")
        .then()
            .statusCode(200)
            .body("customerName", equalTo("Daniel Tester"))
            .body("balance", greaterThan(100000.0f))
            .body("branchDetails.region", equalTo("Budapest"))
            .body("flags", hasItem("VIP"));
    }

    @Test
    @Order(2)
    public void test2_PostCreateNewAccount() {
        BranchDetails viennaBranch = new BranchDetails("BR-99", "Vienna");
        AccountPojo newAccount = new AccountPojo(
                "John Doe",
                "CURRENT",
                50000.0,
                "EUR",
                "PENDING",
                viennaBranch,
                Arrays.asList("NEW_CUSTOMER")
        );

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
            .extract().path("id");
    }

    @Test
    @Order(3)
    public void test3_PutUpdateAccountKycData() {
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
            .pathParam("accId", createdAccountId)
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
            .body("customerName", equalTo("John Doe KYC-Verified"));
    }

    @Test
    @Order(5)
    public void test5_DeleteFraudulentAccount() {
        given()
            .pathParam("accId", createdAccountId)
        .when()
            .delete("/accounts/{accId}")
        .then()
            .statusCode(200);

        given()
            .pathParam("accId", createdAccountId)
        .when()
            .get("/accounts/{accId}")
        .then()
            .statusCode(404);
    }
}
