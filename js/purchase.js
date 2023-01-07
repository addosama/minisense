var plan;
var JumpPlatfom;
function purchase(selectedPlan){
    plan=selectedPlan;
    document.getElementById("PurchasePlan").style.visibility='hidden';
    document.getElementById("PurchasePlan").style.display='none';
    document.getElementById("title").innerHTML="Select a payment platform";
    document.getElementById("PurchaseSelect").style.visibility='visible';
    document.getElementById("g-progress").style.width='66.66%';
}
function jump(platform){
    var P1;
    JumpPlatfom = platform;
    if(platform === 1){
        P1="爱发电"
    }
    document.getElementById("PurchaseSelect").style.visibility='hidden';
    document.getElementById("PurchaseSelect").style.display='none';
    document.getElementById("title").innerHTML="Finish"
    document.getElementById("Jtitle").innerHTML="Jump to " + P1
    document.getElementById("jump").style.visibility='visible'
    document.getElementById("g-progress").style.width="100%"
}

function jumpto(){
    if(plan === 1){
        if(JumpPlatfom === 1){
            window.location.href = 'https://afdian.net/order/create?plan_id=4faa9c788d5b11edac3352540025c377&product_type=0'
        }
    }else if(plan === 2){
        if(JumpPlatfom === 1){
            window.location.href = 'https://afdian.net/order/create?plan_id=b2bcd2628d5c11eda16152540025c377&product_type=0'
        }
    }else if(plan === 3){
        if(JumpPlatfom === 1){
            window.location.href = 'https://afdian.net/order/create?product_type=1&plan_id=eb5c52548d5d11eda45052540025c377&sku=%5B%7B%22sku_id%22%3A%22eb6885108d5d11ed9f2f52540025c377%22,%22count%22%3A1%7D%5D'
        }
    }
}