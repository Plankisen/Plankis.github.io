<script>
    import { text } from 'svelte/internal'
    import { blur } from 'svelte/transition'
    import { onMount } from 'svelte'


onMount(() => {
    const textElement = document.getElementById('text')
    const optionButtonsElement = document.getElementById('option-buttons')

function startGame(){
    showText(1)
}

function showText(textIndex){
    const currentText = textList.find(currentText => currentText.id === textIndex)
    textElement.innerText = currentText.text
    while (optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    currentText.options.forEach(option => {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
    })
}

function selectOption(option){
    const nextTextId = option.nextText
    showText(nextTextId)
}

let textList = [
    {
    id: 1,
    text: 'You have a serious heart disease and are in need of a new heart. There is a loophole that allows you to skip past the waiting list. Do you skip the waiting list, potentially killing others, or do you wait in line and hope you survive?',
    options: [
        {
            text: 'You skip the line.',
            nextText: 2
        },
        {
            text: "You don't skip the line.",
            nextText: 3
        }
    ]
    },
    {
    id: 2, 
    text: "You’ve gotten your new heart but there is a catch. You don’t have health insurance and the medical bill is too large. Your family is now in immense debt. But there is a way. You used to work as a chemistry teacher and you know that one of your students, Jessie, has some connections in the criminal world. Being a former chemistry teacher you have some knowledge that allows you to cook the best meth in town.",
    options:[
        {
            text: "You cook meth",
            nextText: 4
        },
        {
            text: "No meth?",
            nextText: 13
        }
    ]
    },
    {
    id: 3,
    text: "Your condition worsens but you manage to survive. One day you are lying in bed when your phone rings. You pick up the phone and a voice starts talking on the other end. The person on the other end is the person you could have skipped ahead of. They know you could have used a loophole to get ahead of them and if you had, they would have died. Therefore they want to thank you. His name is Paul Goodman and he asks you if you want to work for him. He asks you if you want to work for him. However, there is a catch: You don’t have a degree but Paul says he can supply you with a fake degree. The money could help you get a new heart.",
    options: [
        {
            text: "Say yes to Paul's fake degree.",
            nextText: 8
        },
        {
            text: "Live the legal life.",
            nextText: 17
        }
    ]
    },
    {
    id: 4,
    text: "You contact your old student and, at first, he is a bit suspicious. After convincing him that you are not working with the police he agrees to meet you later that day. Jessie greets you in his cabin's basement and you talk about cooking meth. After selling a decent bit of meth and paying off your debt you start to think about quitting.",
    options: [
        {
            text: "Quit the meth career.",
            nextText: 16
        },
        {
            text: "Go all in on the meth.",
            nextText: 5
        }
    ]
    },
    {
    id: 5,
    text: "Business is booming and your meth is the best in town. After a while, however, your brother in law Hank Vader is hunting you down. After you respond violently to him entering Jessie's basement, he has no choice but to resort to violence.",
    options: [
        {
            text: "You try to kill Hank",
            nextText: 6
        },
        {
            text: "You try to run away from Hank",
            nextText: 7
        }
    ]
    },
    {
    id: 6,
    text: "You kill Hank and your meth business is thriving. You make a lot of money and become the guy known as the Escobar of Meth. You live the rest of your life as a drug lord and die at the age of 85.",
    options: [
        {
            text: "Go back to start",
            nextText: 1
        },
        {
            text: "Go back to start :)",
            nextText: 1
        }
    ]
    },
    {
    id: 7,
    text: "You start running but Hank throws his DEA badge in your direction. It hits you in the head and you die.",
    options: [
        {
            text: "Go back to start",
            nextText: 1
        },
        {
            text: "Go back to start :)",
            nextText: 1
        }
    ]
    },
    {
    id: 8,
    text: "During your first case, the opposing lawyer tells you that they know about you faking your degree. He tells you to lose the case on purpose even though your client is innocent and could face harsh punishment. If you don’t lose the case on purpose, the other lawyer will snitch and if you do, your client will face harsh consequences.",
    options: [
        {
            text: "Intentionally lose the case.",
            nextText: 9
        },
        {
            text: "Stand up for your client.",
            nextText: 11
        }
    ]
    },
    {
    id: 9,
    text: "After a bad start to your lawyer career, things finally start to catch up. You make some good money, you get a new heart and all of that good stuff. But there is a catch. Authorities have become aware of your fake degree. They tell you that a lot of fake degrees have been spotted lately. If you tell them who provided you with yours, they’ll let you go. If you don’t, you go to prison.",
    options: [
        {
            text: "You snitch on Paul.",
            nextText: 10
        },
        {
            text: "Walter ain't no snitch.",
            nextText: 12
        }
    ]
    },
    {
    id: 10,
    text: "Paul is not gonna be very happy about this, but at least you’re free to go. You end up getting your old job as a chemistry teacher back and live a happy life afterwards.",
    options: [
        {
            text: "Go back to start",
            nextText: 1
        },
        {
            text: "Go back to start :)",
            nextText: 1
        }
    ]
    },
    {
    id: 11,
    text: "You get sent to prison due to your fake degree. They manage to trace back your degree to Paul Goodman and he is also sent to the same prison as you. He is pissed that you got him sent to prison and decides to shank you.",
    options: [
        {
            text: "Go back to start",
            nextText: 1
        },
        {
            text: "Go back to start :)",
            nextText: 1
        }
    ]
    },
    {
    id: 12,
    text: "You end up in prison, and funnily enough, you meet your old client. He is absolutely furious with you and stabs you to death.",
    options: [
        {
            text: "Go back to start",
            nextText: 1
        },
        {
            text: "Go back to start :)",
            nextText: 1
        }
    ]
    },
    {
    id: 13,
    text: "You decide that cooking meth is a bad idea. However, this does not change the fact that you are in immense debt. You consider starting a Gofundme page but you have to tell some lies. This feels a bit wrong but it might be the only way to pay off the debt.",
    options: [
        {
            text: "You start the gofundme page with some cap",
            nextText: 14
        },
        {
            text: "You decide that starting the page is a bad idea",
            nextText: 15
        }
    ]
    },
    {
    id: 14,
    text: "When you skipped the waiting line for the heart, a man by the name of Paul Goodman died. People who see your Gofundme page are getting a bit suspicious that you skipped the line. Paul’s friends know that someone skipped ahead of Paul and they have reasons to believe it’s you. They manage to track you down and stab you right in your brand new heart.",
    options: [
        {
            text: "Go back to start",
            nextText: 1
        },
        {
            text: "Go back to start :)",
            nextText: 1
        }
    ]
    },
    {
    id: 15,
    text: "The only way you could pay off the debt was through selling your house and car. You end up living the rest of your life without a home and in misery.",
    options: [
        {
            text: "Go back to start",
            nextText: 1
        },
        {
            text: "Go back to start :)",
            nextText: 1
        }
    ]
    },
    {
    id: 16,
    text: "You don’t feel very good about all the meth you sold but the debt is paid off and you seem to have gotten away from the police. However, Jessie thinks you’re going to snitch. He grabs his gun and shoots you in your big ass forehead. You die.",
    options: [
        {
            text: "Go back to start",
            nextText: 1
        },
        {
            text: "Go back to start :)",
            nextText: 1
        }
    ]
    },
    {
    id: 17,
    text: "Your debt keeps increasing and you can’t afford to take care of yourself. You die from a heart attack.",
    options: [
        {
            text: "Go back to start",
            nextText: 1
        },
        {
            text: "Go back to start :)",
            nextText: 1
        }
    ]
    },
    
    
];

startGame()
})
</script>

<body>
    <div class="container">
        <div id="text">First choice</div>
        <div id="option-buttons" class="btn-grid">
            <button class="btn">Option 1</button>
            <button class="btn">Option 2</button>
        </div>
    </div>
</body>

<style>
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: auto;
        height: 200px;
        background: gray;
        width: 100vw;
        height: 100vh;
    }
    
    .container{
        background-color: white;
        width: 1000px;
        max-width: 60%;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px 2px;
    }

    #text{
        font-family: arial;
        font-size: 35px;
    }

    .btn-grid{
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 10px;
        margin-top: 10px;
    }

    :global(.btn){
        padding: 16px 42px;
        box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.5);
        line-height: 1.25;
        background: #FC6E51;
        color: white;
        font-size: 16px;
        letter-spacing: .08em;
        text-transform: uppercase;
        position: relative;
        overflow: hidden;
    }


</style>
