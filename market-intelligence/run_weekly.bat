@echo off
REM TestAcademy & Borbas Webdesign - Weekly Autonomous Intelligence Runner
cd /d "C:\Users\Daniel\Projects\websites\testacademy.hu"
echo =================================================== >> "market-intelligence\reports\weekly_cron.log"
echo [START] Weekly Hunt initiated at %date% %time% >> "market-intelligence\reports\weekly_cron.log"
call npm run hunt >> "market-intelligence\reports\weekly_cron.log" 2>&1
echo [FINISH] Weekly Hunt completed at %date% %time% >> "market-intelligence\reports\weekly_cron.log"
echo =================================================== >> "market-intelligence\reports\weekly_cron.log"
