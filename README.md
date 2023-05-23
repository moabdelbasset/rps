# Rock Paper Scissors
Rock Paper Scissors is a web based game built with HTML, CSS and JavaScript language. It's basesd on the classic rock paper scissors game and targeting users who wants to have fun playing with a computer.

![Mockup](assets/images/readme_images/mockup.png)

## Features 

### Landing Page:

The website consists of two webpages

* Welcome Page: 
    * Welcome page is the first page the user gets when he loads the website
    * It contains the games rules and a button that will load the user to the game

![Welcome Page](assets/images/readme_images/welcome_page.png)    

* Game Page:
    * Game page where users start to play the game.
    * It contains 3 buttons of users to choose rock paper or scissors.
    ![Game Page](assets/images/readme_images/game_page.png)

    * Once the user selects it will change the left picture according to the user choice.
    * When a user clicks on rock a rock image should appear on the left side.
    ![Choosing rock](assets/images/readme_images/rock_image.png)

    * When a user clicks on paper a paper image should appear on the left side.
    ![Choosing paper](assets/images/readme_images/paper_image.png)

    * When a user clicks on scissors a scissors image should appear on the left side.
    ![Choosing scissors](assets/images/readme_images/scissors_image.png)

    * Computer will decide to choose randomly between the 3 options.
    * Once the computer decides the right image will change according to the computer choice.
    * There is a place for score and paragraph section tells which one wins.
    ![Score](assets/images/readme_images/score.png)

    * There is a reset button if the user wants to reset the score.
    ![Reset Game](assets/images/readme_images/game_page.png)



 ### Existing Features 
 * Responsive design
 * Score calculation
 * Restarting the game
 * favicon
 
 ![fav icon](assets/images/readme_images/favicon-tmp.png)
 
### Features left to Implement 
 * Adding dificulty to the game
 * Allowing multiplayer option over network
 * Registering users and keep record of their scores

## Technologies 
* HTML
    * The structure of the Website was developed using HTML as the main language.
* CSS
    * The Website was styled using custom CSS in an external file.
* JavaScript
    * The logic of the game was done using JavaScript    
* Visual Studio Code
    * The website was developed using Visual Studio Code IDE
* GitHub
    * Source code is hosted on GitHub and delpoyed using Git Pages.
* Git
    * Used to commit and push code during the development opf the Website
* Tinyjpg
    * https://tinyjpg.com/ was used to reduce the size of the images used throughout the website
* favicon.io
    * favicon files were created 
* pexels.com
    * https://www.pexels.com/ was used to get the images for my website   

 ## Testing
  ### Responsiveness 
The pages underwent testing to ensure they were responsive across various screen sizes starting from 320px and above. The testing was performed on Chrome, Edge, Firefox, and Opera browsers.

Steps to test:
1. Open browser and navigate to [Rock Paper Scissors](https://moabdelbasset.github.io/rps/)
2. Open the developer tools (right click and inspect)
3. Decrease the screen width to 320px
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width

Expected:
Website is responsive on all screen sizes and no images are pixelated or stretched.
No horizontal scroll is present.
No elements overlap.

Actual:
Website was responsive on all screen sizes and no image was pixelated or stretched.
Horizontal scroll was present because of the schedule section.
Tested on Iphone 12 and Samsung Galaxy S8.

## Accessibility

[Wave Accessibility](https://wave.webaim.org/) tool was used throughout development and for final testing of the deployed website to check for any aid accessibility testing.

Testing was focused to ensure the following criteria were met:

- All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs
- Color contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
- All not textual content had alternative text or titles so descriptions are read out to screen readers
- HTML page lang attribute has been set
- Aria properties have been implemented correctly
- WCAG 2.1 Coding best practices being followed

![Wave Accessibility main page](assets/images/readme_images/w3_index.png)
![Wave Accessibility game page](assets/images/readme_images/w3_game.png)

![W3C HTML Validator](assets/images/readme_images/html_valid.png)
![W3C CSS Validatior](assets/images/readme_images/css_validate.png)
![JS Validator](assets/images/readme_images/jshint.png)

Navigation Accessibility: The new game button was tested and verifed that will load the webpage.

Game testing:
In this phase I tested the game logic. After clicking on new game I verfied that clicking on the buttons rock, paper or scissors will change the left image according to the user choice.
* Confimed when click on Rock button the left image will change to Rock.
* Confimed when click on Paper button the left image will change to Paper.
* Confimed when click on Scissors button the left image will change to Scissors.

For computer turn I confirmed that the choice selected randomly and according to selection the right image will change accordingly/
* Confimed when computer chooses Rock button the right image will change to Rock.
* Confimed when computer chooses Paper button the right image will change to Paper.
* Confimed when computer chooses  Scissors button the right image will change to Scissors.

After the 2 choices were made will start decide who is the winner according to the rules. According to the winner the score will be increased by one and a text box informing which player wins and why. If the 2 players had the same choice then a message will appear that it's a tie and the score will remain as is.

If the user wants to reset the score he can click on Reset button that will reset the score back to zero and change the image to the general rock paper scissors image

## Deployment

### Version Control
* The following git commands were used throughout development to push code to the remote repo:
    * ```git add <file>``` - This command was used to add the file(s) to the staging area before they are committed.
    * ```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.
    * ```git push``` - This command was used to push all committed code to the remote repository on github.


### Deployment to Github pages
The site was deployed to GitHub pages. The steps to deploy are as follows:
* The site was deployed to GitHub pages. The steps to deploy are as follows:
* On the settings tab, from the source section down-top menu, select the main branch
* Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
* The site was created using the Visual Studio code editor and pushed to github to the remote repository rps.

[Live Link](https://github.com/moabdelbasset/rps)

## Credits 
* [An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
* [Flex box froggy](https://flexboxfroggy.com/)
* [Code Institute Project Section](https://www.youtube.com/watch?v=apK6caj8bfI)
