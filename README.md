# GitLab Pages:
- https://tdse2020.gitlab.io/tower-of-hanoi-assessment 

# Tower Of Hanoi Partner:
  - Darian Martinez
  
  # Site 
  - Randy's Tower Of Hanoi Demo

# Plan Of Action

# 1 How do we make a disc.

- First we will make a big div by class,
- Make sure that our disc's are functional.
  - console.log to check for errors.

# 2 How do we seperate each disc.

- We Will Target each Tower
 - by useing event. currentTarget
- We only need to move the top most disc at one time
 - by targeting the lastchild(because of the use of column-reverse)


# 3 How do we move the disc.

- How will we connect our towers to our clicks?
 - by making a function name that makes sense. and create a connection for that function to a click handler
- How will the function pickUp and Drop Disc's?
 - by writing an if statement that picks up and appends the disc to a holding area, and have another if statement that appends the disc from that holding area to the selected tower.
- How will we keep the larger disc's from landing on Top of smaller the smaller disc's?
 - by writing a conditional(ifStatement)comparing the two disc sizes
- How will We Declare a Winner Winner Chicken Dinner:)?
 - by writing a conditional that sets Element count to === 4

 
 
 # Assessment: Tower of Hanoi (partner project)



 

# Pair Programming
You will work in pairs to create a JavaScript version of the Tower of Hanoi.

Your submission should be entirely the work of you and your partner - (don't copy a solution written by someone else).

# Hints
    Make each tower a flex box that stacks elements from bottom to top using the following CSS properties:
{
    display: flex;  
    flex-direction: column-reverse;  
    align-items: center;
}
You will want to have the player click twice for each move - first to pick the source tower, second to pick the destination tower. Use a variable to keep track of which mode the player is in.

Add a click handler to each of the three towers. Use event.currentTarget inside the event handler to determine which tower was clicked.

Use the DOM property childElementCount to find how many disks are in a tower.

Use the DOM property lastElementChild to find the disk on top of a tower.

Use the DOM method appendChild() to add a disk to a tower (you have already used this method many times in previous assignments). Note that when you use appendChild on an element that already has a parent, it is automatically removed from the old parent and added
to the new one.

Use the Element.clientWidth property to get the width of your disk elements.

# Submission (Team Leader Only)
Push your code into your GitLab repository and deploy it via GitLab pages.
Once you have the GitLab Pages url (ex: https://username.gitlab.io/hanoi/), go back to your code to create a README.md file, and put the GitLab Pages url, your group's thought processes/development plans, and your groupmates' names as the contents.
Push your code to your GitLab repo once more.
In Canvas, please submit your Gitlab Repo url and make a comment that has all your groupmates' names.
In GitLab, add KA_Grading as a member on your project with "Reporter" permission.
