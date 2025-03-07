function isInInterval(intervalStart, intervalEnd, measuredPulse){
    if (intervalEnd>=measuredPulse && measuredPulse>=intervalStart)
        return true
    else
        return false
};
console.log(isInInterval(130,140,135))
console.log(isInInterval(130,140,150))
console.log(isInInterval(130,140,130))
console.log(isInInterval(130,140,90))