package hu.testacademy.api.pojo;

import java.util.List;

public class AccountPojo {
    
    private String id;
    private String customerName;
    private String accountType;
    private Double balance;
    private String currency;
    private String status;
    private BranchDetails branchDetails;
    private List<String> flags;

    public AccountPojo() {}

    public AccountPojo(String customerName, String accountType, Double balance, String currency, String status, BranchDetails branchDetails, List<String> flags) {
        this.customerName = customerName;
        this.accountType = accountType;
        this.balance = balance;
        this.currency = currency;
        this.status = status;
        this.branchDetails = branchDetails;
        this.flags = flags;
    }

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
