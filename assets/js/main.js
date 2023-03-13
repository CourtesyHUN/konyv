function btn() 
{
    var szoveg = document.getElementById("textarea").value
    document.getElementById("bal_oldal").innerHTML = szoveg.substring(0, 324)
    document.getElementById("jobb_oldal").innerHTML = szoveg.substring(325,649) 
}

function lapoz_ballra()
{
    
}

var p = 1
function lapoz_jobbra()
{
    p++
    var szoveg = document.getElementById("textarea").value
    document.getElementById("bal_oldal").innerHTML = ""
    document.getElementById("jobb_oldal").innerHTML = ""
    document.getElementById("bal_oldal").innerHTML = szoveg.substring(324*p, 324*p+324)
    document.getElementById("jobb_oldal").innerHTML = szoveg.substring(324*p+324+1,324*p+324+1)
}
