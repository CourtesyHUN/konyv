function btn() 
{
    var szoveg = document.getElementById("textarea").value
    document.getElementById("bal_oldal").innerHTML = szoveg.substring(0, 324)
    document.getElementById("jobb_oldal").innerHTML = szoveg.substring(325,649) 
}

var p = 0
function lapoz_ballra()
{
    console.log(p);
    if (p<=0) 
    {
        alert("Erre a borító van")
    }
    else
    {
        p-= 2
        var szoveg = document.getElementById("textarea").value
        document.getElementById("bal_oldal").innerHTML = ""
        document.getElementById("jobb_oldal").innerHTML = ""
        document.getElementById("bal_oldal").innerHTML = szoveg.substring(324*-p, 324*-p+324)
        document.getElementById("jobb_oldal").innerHTML = szoveg.substring(324*-p+324+1,324*-p+324+324)
    }
}
function lapoz_jobbra()
{
    p+= 2
    var szoveg = document.getElementById("textarea").value
    document.getElementById("bal_oldal").innerHTML = ""
    document.getElementById("jobb_oldal").innerHTML = ""
    document.getElementById("bal_oldal").innerHTML = szoveg.substring(324*p, 324*p+324)
    document.getElementById("jobb_oldal").innerHTML = szoveg.substring(324*p+324+1,324*p+324+324)
}
