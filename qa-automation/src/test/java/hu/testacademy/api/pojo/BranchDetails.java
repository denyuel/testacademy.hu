package hu.testacademy.api.pojo;

public class BranchDetails {
    private String branchId;
    private String region;

    public BranchDetails() {}

    public BranchDetails(String branchId, String region) {
        this.branchId = branchId;
        this.region = region;
    }

    public String getBranchId() { return branchId; }
    public void setBranchId(String branchId) { this.branchId = branchId; }

    public String getRegion() { return region; }
    public void setRegion(String region) { this.region = region; }
}
