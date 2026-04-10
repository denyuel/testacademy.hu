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

        String createTableSql = "CREATE TABLE bank_accounts (" +
                                "id INT PRIMARY KEY, " +
                                "customer_name VARCHAR(255), " +
                                "balance INT)";
        dbManager.executeUpdate(createTableSql);

        String insertSql = "INSERT INTO bank_accounts (id, customer_name, balance) " +
                           "VALUES (101, 'Kovacs Janos', 5000)";
        dbManager.executeUpdate(insertSql);
    }

    @AfterAll
    public static void tearDownDatabase() throws SQLException {
        dbManager.disconnect();
    }

    @Test
    public void testAccountBalanceDeduction_EndToEnd() throws SQLException {
        int initialBalance = dbManager.executeSelectInt("SELECT balance FROM bank_accounts WHERE id = 101", "balance");
        
        dbManager.executeUpdate("UPDATE bank_accounts SET balance = balance - 2000 WHERE id = 101");
        
        int finalBalance = dbManager.executeSelectInt("SELECT balance FROM bank_accounts WHERE id = 101", "balance");
        
        assertEquals(initialBalance - 2000, finalBalance, "Database row did not update to the expected deducted balance");
    }
}
