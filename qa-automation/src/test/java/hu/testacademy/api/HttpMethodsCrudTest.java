package hu.testacademy.api;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class HttpMethodsCrudTest {

    private static final int TARGET_POST_ID = 1;

    @BeforeAll
    public static void setup() {
        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";
    }

    @Test
    @Order(1)
    public void test1_GetMethod_ReadData() {
        given()
            .pathParam("id", TARGET_POST_ID)
        .when()
            .get("/posts/{id}")
        .then()
            .statusCode(200)
            .body("id", equalTo(TARGET_POST_ID))
            .body("userId", notNullValue());
    }

    @Test
    @Order(2)
    public void test2_PostMethod_CreateData() {
        String newPostJson = """
                {
                  "title": "Created via POST",
                  "body": "New content block",
                  "userId": 1
                }
                """;

        given()
            .contentType(ContentType.JSON)
            .body(newPostJson)
        .when()
            .post("/posts")
        .then()
            .statusCode(201)
            .body("title", equalTo("Created via POST"))
            .body("id", equalTo(101)); 
    }

    @Test
    @Order(3)
    public void test3_PutMethod_UpdateEntireData() {
        String putJson = """
                {
                  "id": 1,
                  "title": "Title updated via PUT",
                  "body": "Replaced original content",
                  "userId": 1
                }
                """;

        given()
            .contentType(ContentType.JSON)
            .pathParam("id", TARGET_POST_ID)
            .body(putJson)
        .when()
            .put("/posts/{id}")
        .then()
            .statusCode(200)
            .body("title", equalTo("Title updated via PUT"))
            .body("body", equalTo("Replaced original content"));
    }

    @Test
    @Order(4)
    public void test4_PatchMethod_UpdatePartialData() {
        String patchJson = """
                {
                  "title": "Title updated via PATCH"
                }
                """;

        given()
            .contentType(ContentType.JSON)
            .pathParam("id", TARGET_POST_ID)
            .body(patchJson)
        .when()
            .patch("/posts/{id}")
        .then()
            .statusCode(200)
            .body("title", equalTo("Title updated via PATCH"));
    }

    @Test
    @Order(5)
    public void test5_DeleteMethod_RemoveData() {
        given()
            .pathParam("id", TARGET_POST_ID)
        .when()
            .delete("/posts/{id}")
        .then()
            .statusCode(200);
    }
}
