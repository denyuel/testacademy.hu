package hu.testacademy.api;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import hu.testacademy.api.pojo.AccountPojo;
import hu.testacademy.api.pojo.BranchDetails;

import java.util.Collections;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

@DisplayName("API Domain Constraints & Boundary Validation")
public class AccountCreationBoundaryApiTest {

    @BeforeAll
    public static void setup() {
        RestAssured.baseURI = "http://localhost:3000";
    }

    @ParameterizedTest(name = "Testing creation constraint with Owner=''{0}'', Balance={1}")
    @CsvSource({
        "'', 1000, 400",          // Empty name constraint
        "'John Doe', -500, 400"   // Negative balance constraint
    })
    @DisplayName("Verify strict business rules via Data-Driven Matrix")
    public void executeBoundaryValidations(String ownerName, double initialBalance, int expectedStatusCode) {
        
        BranchDetails branch = new BranchDetails("HU000", "ConstraintTestRegion");
        AccountPojo invalidPayload = new AccountPojo(null, ownerName, initialBalance, "EUR", "PENDING", branch, Collections.emptyList());

        given()
            .contentType(ContentType.JSON)
            .body(invalidPayload)
        .when()
            .post("/accounts")
        .then()
            .statusCode(expectedStatusCode);
    }
}
