const Discord = require('discord.js');
const config = require('./config.json');
const inits = require('./inits2.json')
var wodStats = require('./wod stats.json');
const chars = require('./chars2.json')
const client = new Discord.Client();
const fs = require("fs");

const d10 = 10;
const d6 = 6;
client.once('ready', () => {
	console.log('Ready!');
    if (client.user.avatar != '9b6be54d676b3fd02aa6273413f02683') {
        client.user.setAvatar('./bot.jpg')
            .then(user => console.log(`New avatar set!`))
            .catch(console.error);
    }
});

client.login(config.token);

function invalidNumber(pNumberValue) {
    let xNumberValue = parseInt(pNumberValue);
    if (Number.isNaN(xNumberValue) || xNumberValue < 1 || xNumberValue > 99) {
        return true;
    } else {
        return false;
    }
}

function diceRoller(pDiceFace,pDiceQuantity) {
    let xSingleDieResult = 0;
    let xFinalResult = [];

    for (i = 0; i < pDiceQuantity; i++) {
        xSingleDieResult = Math.floor(Math.random() * pDiceFace) + 1;
        xFinalResult.push(xSingleDieResult);
    }
    //console.log('xFinalResult: ' + xFinalResult);
    //console.log('parseInt(xFinalResult): ' + parseInt(xFinalResult));
    return xFinalResult;
}

function countSuccess(pDiceResult, pTargetNumber, pReducer = 0) {
    let xSuccessCount = 0;
    for (i = 0; i < pDiceResult.length; i++) {
        /*console.log('i: ' + i);
        console.log('pDiceResult[' + i + ']: ' + pDiceResult[i]);
        console.log('pTargetNumber: ' +  pTargetNumber);*/
        if (pDiceResult[i] >= pTargetNumber) {
            xSuccessCount++;
        }

        /*if (pDiceResult[i] <= pReducer) {
            xSuccessCount--;
        }*/
        //console.log('xSuccessCount: ' + xSuccessCount);
    }
    return xSuccessCount;
}

function sumHighestDice(pDiceResult, pHighestDiceQuantity = pDiceResult.length) {
    let xHighestDice = [];
    let xSumHighestDice = 0;
    let xLowest = 0;
    for (i = 0; i < pDiceResult.length; i++) {
        xHighestDice.push(pDiceResult[i]);
    }
    xHighestDice.sort(function(a, b){return a-b})
    xLowest = xHighestDice.length - pHighestDiceQuantity;
    //console.log('xLowest: ' + xLowest);
    xHighestDice.splice(0,xLowest);

    //console.log('xHigestDice: ' + xHighestDice);
    for (i = 0; i < xHighestDice.length; i++) {
        xSumHighestDice += xHighestDice[i];
    }
    xHighestDice.sort(function(a, b){return b-a})
    return {xHighestDice, xSumHighestDice};
}

function explodeDiceSum(pDiceFace, pDiceResult, pExplodeNumber) {
    const singleDie = 1;
    let xSingleDieResult = 0;
    for (j = 0; j < pDiceResult.length; j++) {
        //console.log('---------------------- LOOP 1')
        //console.log('pDiceResult.length: ' + pDiceResult.length);
        //console.log('j: ' + j);
        //console.log('pDiceResult['+j+']: ' + pDiceResult[j]) 
        if (pDiceResult[j] >= pExplodeNumber) {
            xSingleDieResult = diceRoller(pDiceFace, singleDie);
            //console.log('xSingleDieResult '+j+': ' + xSingleDieResult);
            pDiceResult[j] += parseInt(xSingleDieResult);
            //console.log('pDiceResult: ' + pDiceResult);
            while (xSingleDieResult >= pExplodeNumber) {
                //console.log('LOOP 2');
                //console.log('10 cumulativo?');
                xSingleDieResult = diceRoller(pDiceFace, singleDie);
                //console.log('xSingleDieResult (cumultivo) '+j+': ' + xSingleDieResult)
                pDiceResult[j] += parseInt(xSingleDieResult);
                //console.log('pDiceResult: ' + pDiceResult);
                //console.log('xSingleDieResult >= pExplodeNumber: ' + (xSingleDieResult >= pExplodeNumber));
            }
            //console.log('pDiceResult[j] >= pExplodeNumber: ' + pDiceResult[j] >= pExplodeNumber); 
        }
    }
    return;
}

function rerollDice(pDiceFace, pDiceResult, pRerollValue) {
    const singleDie = 1;
    let xSingleDieResult = 0;
    for (a = 0; a < pDiceResult.length; a++) {
        if (pDiceResult[a] === pRerollValue) {
            console.log('pDiceResult['+a+'] :' + pDiceResult[a]);
            xSingleDieResult = parseInt(diceRoller(pDiceFace, singleDie));
            pDiceResult[a]=xSingleDieResult;
            console.log('pDiceResult['+a+'] :' + pDiceResult[a]);
            console.log('pDiceResult: ' + pDiceResult);
            console.log('xSingleDieResult: ' + xSingleDieResult);
            while (xSingleDieResult === pRerollValue) {
                xSingleDieResult = parseInt(diceRoller(pDiceFace, singleDie));
                pDiceResult[a]= xSingleDieResult;
                console.log('pDiceResult['+a+'] : again ' + pDiceResult[a]);
                console.log('pDiceResult: again ' + pDiceResult);
                console.log('xSingleDieResult: again ' + xSingleDieResult);
            }
            
        }
    }
    return;    
}

function explodeDiceRerollResultString(pDiceValue, pExplodeValue) {
    if (pDiceValue === pExplodeValue) {
        return ' **(' + pDiceValue + ')**';
    } else {
        return ' (' + pDiceValue + ')';
    }
}

function explodeDiceReroll(pDiceFace,pDiceResult,pExplodeNumber) {
    const singleDie = 1;
    let xSingleDieResult = 0;
    for (i = 0; i < pDiceResult.length; i++) {
        if (pDiceResult[i] >= pExplodeNumber) {
            xSingleDieResult = diceRoller(pDiceFace, singleDie);
            pDiceResult.splice(i+1,0,explodeDiceRerollResultString(xSingleDieResult,pExplodeNumber));
            while (xSingleDieResult >= pExplodeNumber) {
                xSingleDieResult = diceRoller(pDiceFace, singleDie);
                pDiceResult.splice(i+1,0,explodeDiceRerollResultString(xSingleDieResult,pExplodeNumber));
            }
        }
    }
    return;
}

function addMoreSuccess(pDiceArray, pExtraSuccessValue) {
    xSuccessCount = 0;
    for (j = 0; j < pDiceArray.length; j++) {
        if (pDiceArray[j] >= pExtraSuccessValue) {
            xSuccessCount += 1;
        }
    }
    return xSuccessCount;
}

function diceResultDisplay(pDiceResult,pBoldValue, pCrossedValue = 0, pItallicValue = 0) {
    let xResult = '[';
    let xLastCharacter = ', ';
    let xBoldCharacters = '**';
    let xBoldItallicCharacters = '***';
    let xCrossedCharacters = '~~';
    let xItallicCharacters = '*';
    //console.log('pDiceResult: ' + pDiceResult);
    for (i = 0; i < pDiceResult.length; i++) {
        if (i == pDiceResult.length - 1) {
            xLastCharacter = ' ]';
        }
        console.log('i: ' + i)
        console.log('xLastCharacter: ' + xLastCharacter);
        console.log('xResult: ' + xResult);
        if (!(Number.isNaN(pDiceResult[i]))) { 
            if ((pBoldValue > 0) && (pDiceResult[i] >= pBoldValue)) {
                xResult += ' ' + xBoldCharacters + pDiceResult[i] + xBoldCharacters + xLastCharacter;
            } else if ((pBoldValue > 0) && (pItallicValue > 0) && (pDiceResult[i] > pBoldValue && pDiceResult >= pItallicValue)) {
                xResult += ' ' + xBoldItallicCharacters + pDiceResult[i] + xBoldItallicCharacters + xLastCharacter;
            } else if ((pCrossedValue > 0) && (pDiceResult[i] === pCrossedValue)) {
                xResult += ' ' + xCrossedCharacters + pDiceResult[i] + xCrossedCharacters + xLastCharacter;
            } else {
                xResult += ' ' + pDiceResult[i] + ' ' + xLastCharacter;
            }
        } 
    }
    console.log('xResult: ' + xResult);
    console.log('xLastCharacter: ' + xLastCharacter);
    return xResult;    
}

function diceResultMessage(pOpening,pDiceQuantity,pExtraStuff,pRollValue1, pResult, pHightlight = 0, pCrossed = 0, pItallicHighlight = 0,pRollValue2Name = '', pRollValue2 = null,
    pRollValue2Extra = '') {
    let xMessageResult = pOpening;
    let xMessagePRollValue1 = '';
    let xMessageProllValue2 = '';
    let xDiceMessage = ' dice';

    console.log('pDiceQuantity: ' + pDiceQuantity);
    if (pDiceQuantity === 1) {
        xDiceMessage = ' die';
    };

    xMessagePRollValue1 = diceResultDisplay(pRollValue1, pHightlight, pCrossed, pItallicHighlight);

    if (pRollValue2 != null) {
        xMessageProllValue2 = diceResultDisplay(pRollValue2, pHightlight, pCrossed, pItallicHighlight);
    }

    xMessageResult += pDiceQuantity + xDiceMessage + pExtraStuff + '! They get ' + xMessagePRollValue1 + pRollValue2Name + xMessageProllValue2 + pRollValue2Extra + pResult;
    return xMessageResult;
}



client.on('message', message => {
    const serverID = message.guild.id;
    const channelID = message.channel.id;
    const authorID = message.author.id;
    const authorName = message.member.displayName;
    const initialMessage = '<@' + authorID + '> rolls ';
    let xCommandElements = message.content.trim().split(/ +/g);

    if (message.content.substring(0, 1) == '!') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0].toLowerCase();
		

    }

    function l5rDice(pRollElementPosition) { //pRolPosition will be 1 if dice is rolled or 3 if it's called on initiative commands

        const rollKeepSplitter = 'k'; //used to separate rolled dice from kept dice
        const emphasisReroll = 1
    
        //addition Commands in a roll
        const commandExp9 = 'exp9';
        const commandVoid = 'void';
        const commandEmp = 'emp';
        const commandVoid2k1 = 'void2k1';
        const commandVoid2k2 = 'void2k2';
        const commandUnskilled = 'unskilled';
    
        //core variables
        let xRollSplit = xCommandElements[pRollElementPosition].split(rollKeepSplitter);
        let xDice = parseInt(xRollSplit[0]);
        let xKeep = parseInt(xRollSplit[1]);
        let xDiceMessage = xDice;
        let xKeepMessage = xKeep;


        let xExplodeValue = 10;
        let xTn = "";
        let xDiceResultArray = [];
        let xKeepResult = {};
        let xMessageResult = '';
        let xExpHighlight = 10;

    
        //Circunstantial variales
        let xEmphasis = false;
        let xExp9 = false;
        let xUnskilled = false;
        let xVoid = false;
        let xVoid2k1 = false;
        let xVoid2k2 = false;
        let xStaticModifiers = 0;
        let xExtraCmd = '';
        let xDiceExcess = 0;

        function l5rResultMessage() {
            let xStaticModifierMessage = '';
            let xRollSuccess = '';
            let xResult = '';
            
            if (xStaticModifiers !== 0) {
                if (xStaticModifiers > 0) {
                    xStaticModifierMessage = ' (+' + xStaticModifiers + ')';
                } else if (xStaticModifiers < 0) {
                    xStaticModifierMessage = ' (' + xStaticModifiers + ')';
                };
            };

            if (!(xTn==='') && !Number.isNaN(xTn)) {
                if (xKeepResult.xSumHighestDice >= xTn) {
                    xRollSuccess = ' **Sucess!**'
                } else {
                    xRollSuccess = ' Failure.'
                }
            } else {
                xRollResult = '';
            }

            xResult = xStaticModifierMessage + ', for a total of **' + xKeepResult.xSumHighestDice + '**!' + xRollSuccess;
            return xResult;
        }   
        
        function l5rExtraResultString() {
            let xTnMessage = ''
            let xEmphasisMessage = '';
            let xStaticModifierMessage = '';
            let xVoidMessage = '';
            let xExtraMessage = ' and keeps ' + xKeepMessage;

            if (xDiceMessage === xKeepMessage) {
                xExtraMessage = '';
            }

            if (!(xTn==='') && !Number.isNaN(xTn)) {
                xTnMessage = ' against a TN of ' + xTn;
            };
            
            //console.log('xTnMessage: ' + xTnMessage);

            if (xStaticModifiers !== 0) {
                if (xStaticModifiers > 0) {
                    xStaticModifierMessage = ', with a +' + xStaticModifiers + ' bonus';
                } else {
                    xStaticModifierMessage = ', with a ' + xStaticModifiers + 'penalty';
                }
            } else if (xEmphasis || xVoid) {
                xStaticModifierMessage = ', ';
            };
            
           //console.log('xStaticModifierMessage: '+ xStaticModifierMessage);
            if (xEmphasis) {
                xEmphasisMessage = ' with Emphasis'
                if (xVoid) {
                    xVoidMessage = ' and';
                }
            } 

            //console.log('xEmphasisMessage: '+ xEmphasisMessage);
            
            //console.log('xVoid: '+ xVoid);
            if (xVoid) {
                xVoidMessage += ' using a void point'
            }

            //console.log('xVoidMessage: ' + xVoidMessage)
    
            xExtraMessage += xStaticModifierMessage + xEmphasisMessage + xVoidMessage + xTnMessage;
            //console.log('xExtraMessage: ' + xExtraMessage);
            return xExtraMessage;
        }


        //function l5rDiceMessage(pString) {
        /*    let xTnMessage = ''
            let xRollResult = '';
            let xEmphasisMessage = '';
            let xStaticModifierMessage = '';
            let xDiceResultDisplay = '';
            let xExpHighlight = 10;
            let xKeepResultDisplay = '';
            let xVoidMessage = '';
            let xResultMessage = pString;
            let xDiceMessage = ' dice';
    
            if (xDice === 1) {xDiceMessage = ' die'}
    
            if (!(xTn==='') && !Number.isNaN(xTn)) {
                xTnMessage = ' against a TN of ' + xTn;
                if (xKeepResult.xSum >= xTn) {
                    xRollResult = ' **Sucess!**'
                } else {
                    xRollResult = ' Failure.'
                }
            } //used before focusing all dice messages in a single function

            if (!(xTn==='') && !Number.isNaN(xTn)) {
                xTnMessage = ' against a TN of ' + xTn;
            }
    
            if (xExp9) {
                xExpHighlight = 9;
            }
    
            //console.log('xDiceResultArray: ' + xDiceResultArray);
            //console.log('xExpHighlight: ' + xExpHighlight);
            xDiceResultDisplay = diceResultDisplay(xDiceResultArray,xExpHighlight);

            //console.log('xKeepResult.xHighestDice: ' + xKeepResult.xHighestDice)
            xKeepResultDisplay = diceResultDisplay(xKeepResult.xHighestDice, xExpHighlight);
    
            if (xEmphasis) {
                xEmphasisMessage = ' with Emphasis'
                if (xVoid) {
                    xVoidMessage = ' and';
                }
            }
    
            if (xVoid) {
                xVoidMessage += ' using a void point'
            }
    
            xResultMessage += + xDice + xDiceMessage + xEmphasisMessage + xVoidMessage + xTnMessage + '. They get ' + xDiceResultDisplay + ' and keep ' + 
                              xKeepResultDisplay + ', for a total of **' + xKeepResult.xSumHighestDice + '**!' + xRollResult;
            
            return xResultMessage;*/
        //}
    
        //pRollElementPosition = what element in argos it will use; 1 if normal roll (the l5r command), 3 if initiative
        //check if syntax is correct
        if (invalidNumber(xDice) || invalidNumber(xKeep)) {
            message.channel.send('Not a valid number. Correct syntax: !l5r <number of dice>k<number of dice kept> <TN>')
            return;
        }

        //display help IF purpose is 1 (ie normal roll)
        if (pRollElementPosition === 1 && xCommandElements[pRollElementPosition]=='help') {
            message.channel.send('Syntax: !l5r <number of dice>k<number of dice kept> <TN>.' + '\n' + "**Commands**" + '\n' + "+emp: Rerolls 1s;" + '\n' + "+void: adds 1k1 to the roll;" + '\n' + "+void2k1: adds 2k1 to the roll;" + "\n" + "+void2k2: adds 2k2 to the roll;" + "\n" + "+exp9: Dice explode on 9s;" + "\n" + "+unskilled: Dice don't explode.")
            return;
        }

        if (xKeep > xDice) {
            xKeep = xDice;
        }
        //separate rolled and kept dice
        //xPipOrTn = the position the next word or number that comes after the dice (rolled and kept); example: !l5r 3k2 +2 <== xPipOrTn is the 3rd element of the message (xCommandElements[2])
        //let xPipOrTn = parseInt(pRollElementPosition) + 1; //Determina where to find the variable
    
        console.log('command: ' + pRollElementPosition);
        /*if (!(typeof xCommandElements[xPipOrTn] === 'undefined')) {
          if (xCommandElements[xPipOrTn].startsWith('+') || xCommandElements[xPipOrTn].startsWith('-')) {
              xTn = "";
          } else {
              if (pRollElementPosition === 1) {
                  tnL5r = parseInt(xCommandElements[xPipOrTn]);	
              }
          }
        }*/


        if (Number.isNaN(xDice)||Number.isNaN(xKeep) || xDice < 1 || xKeep < 1) {
            message.channel.send('Not a number. Correct syntax: !l5r <number of dice>k<number of dice kept> <TN>')
            return;
        }


        //Find modifiers and flag them
        for (var i = xCommandElements.length; !!i--;){
            //xExtraCmd = xCommandElements[i].slice(1);
            xExtraCmd = xCommandElements[i];
            xExtraCmd = xExtraCmd.toLocaleLowerCase();
            //console.log('xExtraCmd: ' + xExtraCmd);

            if (xExtraCmd == commandEmp) {
                xEmphasis = true;
            } else if (xExtraCmd == commandExp9 && !xUnskilled) {
                xExp9 = true;
                xExplodeValue = 9;
                xExpHighlight = 9;
            } else if (xExtraCmd == commandVoid && !xVoid) {
                xVoid = true;
            } else if (xExtraCmd == commandVoid2k1 && !xVoid) {
                xVoid = true;
                xVoid2k1 = true;
            } else if (xExtraCmd == commandVoid2k2 && !xVoid) {
                xVoid = true;
                xVoid2k2 = true;
            } else if (xExtraCmd == commandUnskilled && !xExp9) {
                xUnskilled = true;
                xExpHighlight = 0;
            } else if (xExtraCmd.startsWith('+') || xExtraCmd.startsWith('-')) {
                if (!(Number.isNaN(parseInt(xExtraCmd)))) {
                    xStaticModifiers += parseInt(xExtraCmd);
                    console.log('xStaticModifiers: ' + xStaticModifiers);
                }
            } else if (!(Number.isNaN(parseInt(xExtraCmd))) && xTn === '' && i > 1) {
                xTn = xExtraCmd;
            }
        }

        //Apply Void Bonuses
        if (xVoid === true) {
            xDice++;
            xKeep++;
        }
        if (xVoid2k1 === true) {
            xDice++;
        }
        if (xVoid2k2 === true) {
            xDice++;
            xKeep++;
        }

        //The 10 Dice Rule
        //L5R rules do not allow for more than 10 dice to be rolled at once. Refer to page 77 of the 4th edition Core Book
        xDiceExcess = (xDice-10)/2;
        while (xDice > 10) {
            xDice -= 1;
            xDiceExcess += 1;
            if (xKeep < 10) {
                if (xDiceExcess == 2) {
                    keepL5r += 1;
                    xDiceExcess = 0;
                }
            } else {
                xStaticModifiers += 2;
                xDiceExcess =- 1
            }
        }
  
        //Dice rolling
        xDiceResultArray = diceRoller(d10, xDice);

        if (!xUnskilled) {

            explodeDiceSum(d10,xDiceResultArray,xExplodeValue);    
        }
        if (xEmphasis) {
            rerollDice(d10,xDiceResultArray,emphasisReroll)
        }
        //console.log(xEmphasis);
        xKeepResult = sumHighestDice(xDiceResultArray, xKeep); 
        console.log(xKeepResult.xSumHighestDice);
        xKeepResult.xSumHighestDice += xStaticModifiers;
        


        xMessageResult = diceResultMessage(initialMessage,xDiceMessage,l5rExtraResultString(),xDiceResultArray,l5rResultMessage(),
                         xExpHighlight,0,0,' and keep ', xKeepResult.xHighestDice);

        message.channel.send(xMessageResult);
        return;
    }

    function wodDice() {
        const botchValue = 1;
        const defaultDiff = 6;
        const minimumDiff = 2;
        const commandWp = 'wp';
        const commandNoBotch = 'nobotch';
        const commandSpec = 'spec';

        let xDice = parseInt(xCommandElements[1]);
        let xDiff = parseInt(xCommandElements[2]);
        let xDiceResultArray =  [];
        let xSuccesses = 0;
        let xSuccessHighlight = xDiff;
        let xSpecHighlight
        let xExtraCmd = '';
        let xWp = false;
        let xSpec = false;
        let xNoBotch = false;
        let xMessageResult = '';

        function reduceSuccess(pDiceArray) {
            let xOneCount = 0;
            for (k = 0; k < pDiceArray.length; k++) {
                if (pDiceArray[k] === 1) {
                    xOneCount++;
                }
            }
            return -xOneCount;
        };

        function wodExtraMessage() {
            let xWpMessage = '';
            let xSpecMessage = '';
            let xResult = ' against difficulty ' + xDiff;
            const closeMessage = '!'

            if (xWp) {
                xWpMessage = ', spending a Willpower point'
                if (xSpec) {
                    xWpMessage += ' and';
                }
            }

            if (xSpec) {
                xSpecMessage = ' using a specialty'
                if (!xWp) {
                    xWpMessage =  ',';
                }
            }

            xResult += xWpMessage + xSpecMessage;
            return xResult;
        }

        function wodResultMessage() {
            const xInitial = ', for a total of **';
            let xSuccessPluralSingular = ' successes!**'
            let xFailure = '';

            if (xSuccesses === 1 || xSuccesses === -1) {
                xSuccessPluralSingular = ' success!**'
            }

            if (xSuccesses < 0) {
                if (!xNoBotch) {
                    xFailure = ' **BOTCH!!!**'
                }
            }

            xResult = xInitial + xSuccesses + xSuccessPluralSingular + xFailure;
            return xResult;
        }

        if (invalidNumber(xDice)) {
            message.channel.send('Not a number. Correct syntax: !wod <number of dice> <difficulty>')
            return;
        };

        if (xDiff > d10) {
            message.channel.send('Error. Difficulty cannot be higher than 10.')
            return;
        } else if (xDiff < minimumDiff) {
            message.channel.send('Error. Difficulty cannot be lower than 2.')
            return;
        }

        if (invalidNumber(xDiff)) {
            xDiff = defaultDiff;
            xSuccessHighlight = xDiff;
        }

        if (xCommandElements[1]=='help') {
            message.channel.send('Syntax: !wod <number of dice> <difficulty>' + '\n' + "**Commands**" + '\n' + "WP: adds 1 success to the total and prevents botches;" + '\n' + "Spec: 10s count as 2 successes;" + '\n' + "NoBotch: botches are counted as regular failures.")
            return;
        };

        for (var i = xCommandElements.length; !!i--;){
            xExtraCmd = xCommandElements[i];
            xExtraCmd = xExtraCmd.toLocaleLowerCase();
            if (xExtraCmd === commandWp) {
                xWp = true;
                xNoBotch = true;
                xSuccesses += 1;
            } else if (xExtraCmd === commandSpec) {
                xSpec = true;
                xSpecHighlight = 10;
            } else if (xExtraCmd === commandNoBotch) {
                xNoBotch = true;
            };          
        };
        
        xDiceResultArray = diceRoller(d10,xDice);
        xSuccesses += countSuccess(xDiceResultArray,xDiff);
        if (xSpec) {
            xSuccesses += addMoreSuccess(xDiceResultArray,d10);
        };
        if (xSuccesses > 0) {
            xNoBotch = true;
            console.log('xNoBotch: '+ xNoBotch)
        }
        xSuccesses += reduceSuccess(xDiceResultArray);

        xMessageResult = diceResultMessage(initialMessage,xDice,wodExtraMessage(),xDiceResultArray,wodResultMessage(),xSuccessHighlight,botchValue,xSpecHighlight);
        
        console.log(xDiceResultArray);

        message.channel.send(xMessageResult);
        
        return;
    }


    switch(cmd) {
        case 'ping':
            message.channel.send('pong!');
        break;

        case 'l5r':
        case 'l':
            l5rDice(1);
        break;

        case 'wod':
        case 'w':
            wodDice();
        break;
    }

});
//const comando = '!';
//let args