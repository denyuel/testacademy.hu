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

// Evvel a JUnit beállítással rákényszerítjük, hogy a tesztek az Order számok alapján sorrendben fussanak
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
        // GET: Lekérjük az 1-es azonosítójú posztot. Nem küldünk "body"-t.
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
        // POST: Új poszt létrehozása. Az adatbázisban a 101-es ID-t fogja megkapni.
        String newPostJson = """
                {
                  "title": "Ezt a posztot a POST hozta létre",
                  "body": "Ez az új tartalom",
                  "userId": 1
                }
                """;

        given()
            .contentType(ContentType.JSON)
            .body(newPostJson)
        .when()
            .post("/posts")
        .then()
            .statusCode(201) // 201 Created! (Új logikai entitás született)
            .body("title", equalTo("Ezt a posztot a POST hozta létre"))
            // A jsonplaceholder az új elemeknek ID=101 értékes ad vissza.
            .body("id", equalTo(101)); 
    }

    @Test
    @Order(3)
    public void test3_PutMethod_UpdateEntireData() {
        // PUT: A TELJES MÓDOSÍTÁS. Felülírjuk az 1-es posztot. 
        // Bár az eredeti posztnak hosszú teste (body) volt, mi egy tömörített JSON-t küldünk be helyette.
        // A szerver el fogja dobni a régit, és pontosan arra fogja kicserélni, amit most ide írunk!
        String putJson = """
                {
                  "id": 1,
                  "title": "A PUT paranccsal felülírt cím",
                  "body": "Minden korábbi adat elveszett, felülírásra került",
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
            .body("title", equalTo("A PUT paranccsal felülírt cím"))
            .body("body", equalTo("Minden korábbi adat elveszett, felülírásra került"));
    }

    @Test
    @Order(4)
    public void test4_PatchMethod_UpdatePartialData() {
        // PATCH: A RÉSZLEGES MÓDOSÍTÁS. A Sebész munka.
        // Csak és kizárólag a "title" mezőt küldjük át. A poszt eredeti ID-je, a userId-je
        // és a cikk tartalma (body) az adatbázisban érintetlen marad.
        String patchJson = """
                {
                  "title": "Ezt a címet a PATCH cserélte ki finoman"
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
            .body("title", equalTo("Ezt a címet a PATCH cserélte ki finoman"));
    }

    @Test
    @Order(5)
    public void test5_DeleteMethod_RemoveData() {
        // DELETE: Véglegesen töröljük az 1-es azonosítójú posztot a szerverről.
        given()
            .pathParam("id", TARGET_POST_ID)
        .when()
            .delete("/posts/{id}")
        .then()
            .statusCode(200); // JsonPlaceholder-nél a sikeres törlés is 200-at ad vissza!
    }
}
