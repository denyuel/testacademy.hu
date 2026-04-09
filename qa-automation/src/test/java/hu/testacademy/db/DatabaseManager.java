package hu.testacademy.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * Standard JDBC Utility Class. Found in almost every mature automation framework.
 * Responsible for establishing connections and executing SQL statements against the DB.
 */
public class DatabaseManager {

    // In-Memory Database URL (No installation required)
    private static final String JDBC_URL = "jdbc:h2:mem:bankdb;DB_CLOSE_DELAY=-1";
    private static final String USER = "sa";
    private static final String PASSWORD = "";

    private Connection connection;

    public void connect() throws SQLException {
        if (connection == null || connection.isClosed()) {
            connection = DriverManager.getConnection(JDBC_URL, USER, PASSWORD);
        }
    }

    public void disconnect() throws SQLException {
        if (connection != null && !connection.isClosed()) {
            connection.close();
        }
    }

    // Execute DML Commands (INSERT, UPDATE, CREATE TABLE)
    public void executeUpdate(String sql) throws SQLException {
        try (Statement statement = connection.createStatement()) {
            statement.executeUpdate(sql);
        }
    }

    // Execute Query (SELECT) - Fetch a specific INTEGER value mappings
    public int executeSelectInt(String sql, String columnName) throws SQLException {
        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(sql)) {
            
            if (resultSet.next()) { // Iterate cursor to the first row holding the data
                return resultSet.getInt(columnName);
            } else {
                throw new SQLException("No results found for query: " + sql);
            }
        }
    }
}
