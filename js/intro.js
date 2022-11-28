const intro = introJs();
  intro.setOptions({
    steps:[
        {   
            title: 'Login form',
            element:'#Intro',
            intro: 'Welcome to our login page',
            
        },
        {   
            title:'user Input',
            element :'#step2',
            intro : 'type your details here'
        },
        {
            title:'Password',
            element:'#step3',
            intro:'Type your password here',
        },
        {
            title:'Login btn',
            element:'#step4',
            intro:'Login from here'
        },
        {
            title:'Dont have account',
            element:'#step5',
            intro:'If you dont have account sign up here',
        }
    ]
    
  })

  intro.start();