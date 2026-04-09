package hu.testacademy.api;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

public class JsonPlaceholderApiTest {

    @BeforeAll
    public static void setup() {
        // Set Base URI for all tests
        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";
    }

    @Test
    public void testGetUsersReturns200() {
        // Simple GET request validation
        given()
            .when()
                .get("/users")
            .then()
                .statusCode(200)
                .body("", hasSize(greaterThan(0)))
                .body("[0].name", notNullValue());
    }

    @Test
    public void testCreatePostReturns201() {
        // Simple POST request
        String requestBody = """
                {
                  "title": "foo",
                  "body": "bar",
                  "userId": 1
                }
                """;

        given()
            .contentType(ContentType.JSON)
            .body(requestBody)
            .when()
                .post("/posts")
            .then()
                .statusCode(201)
                .body("title", equalTo("foo"))
                .body("id", notNullValue());
    }

    @Test
    public void testPathParameters() {
        // Path Parameter: It dynamically injects the number 5 into the URL
        // Resulting URL: https://jsonplaceholder.typicode.com/users/5
        given()
            .pathParam("userId", 5)
        .when()
            .get("/users/{userId}") // The {userId} is replaced by the pathParam above
        .then()
            .statusCode(200)
            .body("id", equalTo(5))
            .body("name", equalTo("Chelsey Dietrich"));
    }

    @Test
    public void testQueryParametersAndHeaders() {
        // Query Parameter: It appends a question mark at the end. 
        // Resulting URL: https://jsonplaceholder.typicode.com/comments?postId=1
        // Header: We inject a custom header to simulate an API Key or Content-Type
        given()
            .header("Authorization", "Bearer my-fake-token")
            .queryParam("postId", 1)
        .when()
            .get("/comments")
        .then()
            .statusCode(200)
            // Verify that we only get comments belonging to postId 1
            .body("[0].postId", equalTo(1))
            .body("[1].postId", equalTo(1));
    }

    @Test
    public void testMultipleQueryParametersWithMap() {
        // Valódi vállalati példa: Amikor sok szűrőfeltételünk van, egy MAP-et használunk,
        // így a teszt sokkal olvashatóbb marad, és az adatok dinamikusan is kinyerhetőek.
        Map<String, Object> myFilters = new HashMap<>();
        
        // 1. feltétel: Keresünk azokra a kommentekre, amik az 1-es poszthoz tartoznak
        myFilters.put("postId", 1);
        
        // 2. feltétel (Extrém karakterek): Olyan e-mailt keresünk amiben speciális a @ karakter.
        // A REST Assured majd automatikusan URL Encode-olja a háttérben '%40'-re!
        myFilters.put("email", "Eliseo@gardner.biz");
        
        given()
            // Itt adjuk át az összes szűrőfeltételt "ömlesztve", egyetlen sornyi paranccsal!
            .queryParams(myFilters)
        .when()
            .get("/comments")
        .then()
            .statusCode(200)
            // Pontosan egy olyan kommentet várunk ami megfelel mindkét fenti feltételnek.
            .body("", hasSize(1))
            // Az egyetlen visszaadott találat neve pontosan a várt név kell, hogy legyen.
            .body("[0].name", equalTo("id labore ex et quam laborum"));
    }
}
