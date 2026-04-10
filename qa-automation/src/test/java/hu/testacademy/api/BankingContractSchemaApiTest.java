package hu.testacademy.api;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.Matchers.lessThan;

@DisplayName("API Contract Verification & Latency SLAs")
public class BankingContractSchemaApiTest {

    @BeforeAll
    public static void setup() {
        RestAssured.baseURI = "http://localhost:3000";
    }

    @Test
    @DisplayName("Verify API Response payload strictly adheres to structural schema and latency < 800ms")
    public void executeContractAndPerformanceValidation() {
        given()
            .contentType(ContentType.JSON)
        .when()
            .get("/accounts/1")
        .then()
            .statusCode(200)
            .assertThat()
            .body(matchesJsonSchemaInClasspath("schemas/account-schema.json"))
            .time(lessThan(800L));
    }
}
