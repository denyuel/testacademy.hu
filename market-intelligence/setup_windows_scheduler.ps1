# TestAcademy & Borbas Webdesign - Windows Task Scheduler Setup
# Registers a recurring task to execute every Sunday at 20:00

$taskName = "TestAcademy_Weekly_Market_Hunter"
$batPath = "C:\Users\Daniel\Projects\websites\testacademy.hu\market-intelligence\run_weekly.bat"

Write-Host "Regisztráció a Windows Feladatütemezőbe: $taskName..." -ForegroundColor Cyan

$action = New-ScheduledTaskAction -Execute "cmd.exe" -Argument "/c `"`"$batPath`"`""
$trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Sunday -At 8:00PM

try {
    Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Description "Autonomous Weekly Market Intelligence & Competitor Hunter for TestAcademy and Borbas Webdesign" -Force | Out-Null
    Write-Host "`n✅ SIKERES REGISZTRÁCIÓ!" -ForegroundColor Green
    Write-Host "A heti kutató robot ezentúl minden VASÁRNAP este 20:00-kor csendben lefut a háttérben." -ForegroundColor Green
    Write-Host "A friss heti jelentést mindig megtalálod itt: market-intelligence\reports\latest.md" -ForegroundColor Yellow
} catch {
    Write-Host "Hiba a feladat regisztrálásakor (szükség lehet rendszergazdai jogra): $_" -ForegroundColor Red
}
