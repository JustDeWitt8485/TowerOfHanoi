# GitLab Pages

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
