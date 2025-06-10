class meme
{
        quest;
    Number;
    constructor(qst, numb)
    {
        this.quest = qst;
        this.Number = numb;  
    }
    get Number()
    {
        return this.Number;
    }
    get quest()
    {
        return this.quest;
    }
}
class Todo
{
    memes;
    where;

    constructor(DomstructID)
    {
        this.memes = [];
        this.where = DomstructID;
    }
  static  addMeme(qst, todo)
    {
        
        todo.memes.push(new meme(qst, todo.memes.length))
        let sheet = document.getElementById(todo.where);
        let thing = document.createElement('div');
        thing.innerHTML = " "+todo.memes.length + " " + todo.memes[todo.memes.length-1].quest;
        sheet.appendChild(thing); 
        
    }

   static printmemes( todo )
    {
        let sheet = document.getElementById(todo.where);

        for (let i = 0; i < todo.memes.length; i++)
            {
               let thing = document.createElement('div');
               thing.innerHTML = " "+(i+1) + " " + todo.memes[i].quest;
               sheet.appendChild(thing); 
            }
    }
}
document.addEventListener("DOMContentLoaded", function() 
{
    if(localStorage.length ==0)
        {
            todoshka = new Todo("quests");
            localStorage.setItem("list", JSON.stringify(todoshka));
            
        }
        else
            {
                todoshka =JSON.parse(localStorage.getItem("list"))
                Todo.printmemes(todoshka);
            }

            document.getElementById("addquest").addEventListener('click', function() { 
                todoshka = JSON.parse(localStorage.getItem("list"));
                if(document.getElementById("name").value == ""){return}
                Todo.addMeme(document.getElementById("name").value, todoshka);
                localStorage.setItem("list",JSON.stringify(todoshka));
            }
        )
});


