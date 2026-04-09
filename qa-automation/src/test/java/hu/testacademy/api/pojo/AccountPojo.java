package hu.testacademy.api.pojo;

import java.util.List;

// Fő POJO a banki fiókhoz
public class AccountPojo {
    
    // Privát mezők = A JSON kulcsai
    private String id;
    private String customerName;
    private String accountType;
    private Double balance;
    private String currency;
    private String status;
    private BranchDetails branchDetails; // Egy másik POJO beágyazva! (A Komplexítás!)
    private List<String> flags;

    public AccountPojo() {} // Kötelező üres Java konstruktor az automatikus konverzióhoz

    // Gyors építőkonstruktor
    public AccountPojo(String customerName, String accountType, Double balance, String currency, String status, BranchDetails branchDetails, List<String> flags) {
        this.customerName = customerName;
        this.accountType = accountType;
        this.balance = balance;
        this.currency = currency;
        this.status = status;
        this.branchDetails = branchDetails;
        this.flags = flags;
    }

    // --- GETTEREK ÉS SETTEREK ---
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getAccountType() { return accountType; }
    public void setAccountType(String accountType) { this.accountType = accountType; }

    public Double getBalance() { return balance; }
    public void setBalance(Double balance) { this.balance = balance; }

    public String getCurrency() { return currency; }
    public void setCurrency(String currency) { this.currency = currency; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public BranchDetails getBranchDetails() { return branchDetails; }
    public void setBranchDetails(BranchDetails branchDetails) { this.branchDetails = branchDetails; }

    public List<String> getFlags() { return flags; }
    public void setFlags(List<String> flags) { this.flags = flags; }
}
