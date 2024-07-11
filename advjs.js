function xyz(city,...args)
{
    for(let i in args)
    {
        document.write(args[5]);
        document.write("<br>");
    }
}
xyz("delhi",1,3,5,7,9,13,15,17,19);
document.write("<br>");
n = "sai";
c = "synlogica";
l = "hyderabad";
w = "software engineer";
z = `My name is ${n}. i am working at ${c} as ${w}.i am residing in ${l}`;
document.write(z);
document.write("<br>");
n = "sai";
c = "synlogica";
l = "hyderabad";
w = "software engineer";
obj = {
    n,
    c,
    l,
    w
}
z = `name : ${n}`;
g = `company : ${c}`;
document.write(z);
document.write("<br>");
document.write(g);
document.write("<br>");
class Sum
{
    add(a,b)
    {
        let c = a+b;
        document.write("sum "+c);
    }
}
f = new Sum;
f.add(25,36);
document.write("<br>");
class Aor
{
    area(l,b)
    {
        let a = l*b;
        document.write("area of rectangle "+a);
    }
}
w = new Aor;
w.area(25,36);
document.write("<br>");
class Simpleint
{
    si(p,t,r)
    {
        let int = (p*t*r)/100;
        document.write("simple interest: "+int);
    }
}
q = new Simpleint;
q.si(20,10,5);
document.write("<br>");
class Even
{
    abc(name,...args)
            {
                l
        for( let i=0; i<args.length;i++){
            if(args[i]%2==0)
            
                document.write("even number: " +args[i]);
            
        }
    }
}
f = new Even;
f.abc("sai",2,5,7,9,5,8,15,14);
document.write("<br>");
class Odd
{
    def(name,...args)
            {
                l
        for( let j=0; j<args.length;j++){
            if(args[j]%2==1)
            
                document.write("odd number: " +args[j]);
            
        }
    }
}
h = new Odd;
h.def("sai",2,5,7,9,5,8,15,14);
