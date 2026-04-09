package hu.testacademy.api;

import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.notNullValue;

public class JsonPlaceholderApiTest {

    @Test
    public void testGetPost() {
        given()
            .baseUri("https://jsonplaceholder.typicode.com")
            .pathParam("id", 1)
        .when()
            .get("/posts/{id}")
        .then()
            .statusCode(200)
            .body("id", equalTo(1))
            .body("title", notNullValue());
    }
}
