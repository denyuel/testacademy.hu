package hu.testacademy.db;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import java.sql.SQLException;

public class SqlIntegrationTest {

    private static DatabaseManager dbManager;

    @BeforeAll
    public static void setupDatabase() throws SQLException {
        dbManager = new DatabaseManager();
        dbManager.connect();

        // STEP 1: Create local bank_accounts table
        String createTableSql = "CREATE TABLE bank_accounts (" +
                                "id INT PRIMARY KEY, " +
                                "customer_name VARCHAR(255), " +
                                "balance INT)";
        dbManager.executeUpdate(createTableSql);

        // STEP 2: Insert initial dummy data (Mocking the state)
        String insertSql = "INSERT INTO bank_accounts (id, customer_name, balance) " +
                           "VALUES (101, 'Kovacs Janos', 5000)";
        dbManager.executeUpdate(insertSql);
        
        System.out.println("[\u2714] In-Memory H2 DB Started! Table and user 101 (Balance: 5000) created.");
    }

    @AfterAll
    public static void tearDownDatabase() throws SQLException {
        dbManager.disconnect();
    }

    @Test
    public void testAccountBalanceDeduction_EndToEnd() throws SQLException {
        // PRE-CONDITION CHECK
        int initialBalance = dbManager.executeSelectInt("SELECT balance FROM bank_accounts WHERE id = 101", "balance");
        System.out.println("--> Initial DB balance: " + initialBalance); // Expected: 5000

        // ----------------------------------------------------------------------
        // NORMALLY AN API CALL WOULD BE EXECUTED HERE: (e.g., REST Assured POST /transaction body: -2000)
        // Since we are validating DB integration, we mock the backend execution directly:
        // ----------------------------------------------------------------------
        System.out.println("--> [MOCKED API ENGINE]: Processing transaction (-2000 deduction)...");
        dbManager.executeUpdate("UPDATE bank_accounts SET balance = balance - 2000 WHERE id = 101");
        
        // STEP 3: END-TO-END VALIDATION (SQL Assert)
        // Verify via pure JDBC that the rows actually mutated on the storage level.
        int finalBalance = dbManager.executeSelectInt("SELECT balance FROM bank_accounts WHERE id = 101", "balance");
        
        System.out.println("--> Final DB balance: " + finalBalance);

        // Junit Assertion establishing the Test Pass/Fail
        assertEquals(3000, finalBalance, "FATAL ERROR: The database row did not update to the expected deducted balance!");
    }
}
