class DateTimeUtils{
    static formatDayMonth(dayOrMonth){
        if (dayOrMonth.startsWith("0")) {
            dayOrMonth = dayOrMonth.substring(1,2);
        }
        return dayOrMonth;
    }

    static dateFormatIsddMMyyyy(date){
        var date_regex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
        return (date_regex.test(date));
    }
}
export default DateTimeUtils