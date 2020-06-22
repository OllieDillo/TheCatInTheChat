const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzI0MzY1Njk5OTgzNzM2ODQy.Xu_UqA.-MbsisDPd1XxhDBSUIGQM7m2nJE';
//var relpy1 = 'sup';

//bot only summond with a '!'
const PREFIX = "!";

var version = '0.0.l'

bot.on('ready', () =>{
    console.log('Whos ready for fun!');
})

//bot reply to messages
bot.on('message', message=>{
  let args = message.content.substring(PREFIX.lenght).split(" ");

  switch(args[0]){

      case '-help':
        message.channel.send('help list')
        break;

      case 'hello':
        message.channel.send('hello, and welcome to astounding products')
        break;

        // one works for one word...why?
        // do everything to responde to one word
      case 'line':
        message.channel.send('youre not just wrong youre stupid and youre ugly just like ye mum')
        break;
      case 'Line':
        message.channel.send('youre not just wrong youre stupid and youre ugly just like ye mum')
        break;

        /*
      case 'who are you?':
        message.channel.send('Why im the Cat in the Chat')
        break;
        */

      case 'cupcakes':
        message.channel.send('cupcakes, ohhhhhh yer')
        break;
      case 'Cupcakes':
        message.channel.send('cupcakes, ohhhhhh yer')
        break;
        //this one works
      case 'Fuck':
        message.channel.send('fuck you too, cunt')
        break;

      case 'fuck':
        if(args[2] === 'you cat'){
            message.channel.seendMessage('fuck you too cunt')
        }
        else{

        }
          break;

      case 'Twat':
        message.channel.send('fuck you')
        break;

        //new case
      case 'ElabroateBagel':
        message.channel.sendMessage('https://www.elaboratebagel.com/commission')
        break;

      case 'TV':
        message.channel.sendMessage('https://best-series.me/index.php')
        break;  

        case 'info':
          if(args[1] === 'version'){
            message.channel.sendMessage('version ' + version);
          }
            else{
              message.channel.sendMessage('must provide second argument')
            }
            break;
        
          case 'clear':
          if(!args[1]) return message.reply('please define a second arg')
          message.channel.bulkDelete(args[1]);
          break;

//end of switch argument
  }
})
// end of msg

bot.login(token);
