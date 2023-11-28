# Donut_Clicker

### Assignment - Donut Maker

**Logo:** [WCCI We Can Code IT square](<insert logo link here>)

[Accept assignment in Github Classroom](<insert GitHub Classroom link here>)

#### Donut Maker - A tribute to Cookie Clicker

Welcome to Fred the Baker Baking Company! You've been contracted by Fred the Baker Baking Company to take a concept, Donut Maker Clicker, from the drawing board to the browser. Fred is ready to retire and wants a game that uses button clicks to create virtual donuts for the world to enjoy. However, his requirements for 'Auto Clickers' and 'Donut Multipliers' are a bit eccentric.

#### The Application Requirements

**Terminology:**

- **Donut Count:** Number of donuts created by clicking.
- **Auto Clicker:** Automatically clicks every second.
- **Auto Clicker Count:** Number of Auto Clickers purchased.
- **Auto Clicker Cost:** Donuts required to purchase an Auto Clicker.
- **Donut Multiplier:** Increases donut value per click.
- **Donut Multiplier Count:** Amount of Donut Multipliers purchased.
- **Donut Multiplier Cost:** Donuts required to purchase a Donut Multiplier.

**Index.html Setup:**

- Header section with navigation menu (Fred the Baker, Cookie Clicker, Contact Info).
- Main section containing:
  - Section for manual clicking.
  - Section for Auto Clickers.
  - Section for Donut Multipliers.

**Donut Maker Functions:**

- Adds a donut per button click.
- Purchases Auto Clickers.
- Activates Auto Clickers to apply clicks every second.
- Purchases Donut Multipliers.
- Calculates donut earnings per click based on Donut Multipliers.
- Resets the game state.

**Additional Requirements:**

- Use semantic HTML and BEM.
- Implementation in iterations.

#### Iterations

**Iteration 1:**
- Features:
  - Count donuts.
  - Purchase the first Auto Clicker.
  - Auto Clicker cost increment.
  - Ensure enough clicks to buy an Auto Clicker.
  - Auto Clicker impact on donut addition.

**Iteration 2:**
- Features:
  - Purchase the first Donut Multiplier.
  - Donut Multiplier cost increment.
  - Ensure enough donuts to buy a Donut Multiplier.
  - Click value increase with Donut Multipliers.
  - Exponential increase in subsequent Donut Multipliers.
  - Impact of Donut Multipliers on Auto Clickers.

**Iteration 3:**
- HTML setup:
  - Create a button for clicking.
  - Display the donut count.
  - Section for Auto Clickers.
  - Section for Donut Multipliers.
  - Header links (Company, Inspiration, Developer).

**Iteration 4:**
- Link DonutMaker.js to index.html.
- Update app.js to connect both files.
- Update functionality:
  - Change in Donut count on clicking.
  - Disable buttons when donuts are insufficient.
  - Display Auto Clicker and Donut Multiplier counts.
  - Display click value and prices.
  
**Iteration 5:**
- Implement game reset.

**Iteration 6 (Stretch Features):**
- Click Storm: Random event for bonus clicks.
- Purchasable background colors/images.
- Sound addition.
- Adjust requirements for better game balance.

#### Grading Rubric

- Working Software
- Clean Code
- Version Control and GitHub
- (Further breakdown on grading criteria for each section)

### Grading Rubric

#### Header
- **Perfect Score Requirements:**
  - Contains comprehensive information about Fred the Baker Baking Company, Cookie Clicker, and your contact details.
  - Presents all required information accurately and effectively.

#### Donut Clicker
- **Perfect Score Requirements:**
  - Adds one or more donuts to the donut count per click.
  - Performs this action without any issues, functioning flawlessly.

#### Donut Count
- **Perfect Score Requirements:**
  - Accurately tracks the donut count, considering the impact of autoclickers and/or multipliers on the count.
  - Updates the count correctly, ensuring accuracy in all scenarios.

#### Auto Clicker
- **Perfect Score Requirements:**
  - Adds one click per second for each auto clicker purchased.
  - Ensures proper functioning without any glitches.
- **Cost Scaling:**
  - The cost of additional autoclickers increases by 10% with each purchase, scaling accurately and consistently.

#### Auto Clicker Count Display
- **Perfect Score Requirements:**
  - Displays the count of auto clickers to the user.
  - Updates the count accurately with each purchased auto clicker, reflecting the current status correctly.

#### Donut Multiplier
- **Perfect Score Requirements:**
  - Increases the value of each click by 1.2x for each multiplier purchased.
  - Performs this action flawlessly without any inconsistencies or issues.

#### Donut Multiplier Cost
- **Perfect Score Requirements:**
  - Increases the cost of additional multipliers by 10% with each purchase, scaling accurately and consistently.

#### Multiplier Count Display
- **Perfect Score Requirements:**
  - Displays the count of multipliers to the user.
  - Accurately updates the count with each purchased multiplier, reflecting the current status correctly.

#### Purchasing Autoclickers/Multipliers
- **Perfect Score Requirements:**
  - Prevents the user from purchasing an item if they lack sufficient donuts to afford it.
  - Subtracts the correct amount of donuts from the overall count when an item is purchased, ensuring flawless functionality.

#### Reset Button
- **Perfect Score Requirements:**
  - Resets the donut count and item counts to zero.
  - Resets item costs to their starting value accurately when the button is clicked, providing a clean and correct reset functionality.

#### Style
- **Perfect Score Requirements:**
  - Ensures a functional layout that is aesthetically pleasing.
  - Allows the user to view all values and buttons with minimal scrolling.
  - Incorporates appropriate images and backgrounds that enhance the overall user experience on the site.
