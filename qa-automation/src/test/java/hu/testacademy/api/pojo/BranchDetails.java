package hu.testacademy.api.pojo;

// A kisebb beágyazott objektum POJO-ja
public class BranchDetails {
    private String branchId;
    private String region;

    // Kötelező "üres" konstruktor a Jackson könyvtár visszatöltéséhez (deszerializáció)
    public BranchDetails() {}

    // Kényelmi konstruktor, hogy egy sorban létre tudjuk hozni
    public BranchDetails(String branchId, String region) {
        this.branchId = branchId;
        this.region = region;
    }

    public String getBranchId() { return branchId; }
    public void setBranchId(String branchId) { this.branchId = branchId; }

    public String getRegion() { return region; }
    public void setRegion(String region) { this.region = region; }
}
