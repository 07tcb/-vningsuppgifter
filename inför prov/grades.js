function getGrade(points){
    if (points <=12)
        return "F"
    else if (points<=15)
        return "E"
    else if (points<=18)
        return "D"
    else if (points<=22)
        return "C"
    else if (points<=26)
        return "B"
    else if (points<=30)
        return "A"
}





console.log(getGrade(21))