//stand for something to print
var std_print = "";

function my_print(to, s)
{
    std_print = std_print + s;
    document.getElementById(to).innerHTML = std_print;
}

function my_nextline()
{
    my_print("stdout", "<br>");
}
function print_hello()
{
    document.write("hello world");
}

function is_good_time()
{
    var time;
    var x = "";
    var ret;
    time = new Date().getHours();

    if (time < 20)
	{
	    x = "Good Day";
	}

    ret = time + x;
//    return x;
    return ret;
}

function practice_for()
{
    var to = "";
    var i;
    for (i = 1; i < 6; i++)
	{
	    to = to + "<h" + i + ">" + "This is h" + i  + "</h"+i+">";
	}
    return to;
}


