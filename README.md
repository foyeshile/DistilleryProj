# INST377-Group-37
# Title: Product Discovery Platform
# Names of Group Members:
Henry Wilson.  
Emmanuel Akpalu.  
Fuad Oyeshile.  
# Description
Our client has tasked us with creating a dynamic and user-friendly product discovery platform. This platform utilizes manufacturer, rating, and category data to provide users with answers that facilitate product exploration, comparison, and decision-making.
# Target Browser
Chrome
# User Manual
Visit the following doc file for information: https://github.com/GamerPotato/INST377-Group-37/blob/main/INST377%20-%20Group%207%20Developer%20Manual.txt
# Developer Manual
## To run on a server
In order to be run on a server, if VSCode is being utilized, the Live Server extention should be installed.
## API endpoints
https://whiskyhunter.net/api/ is the api
### /distilleries_info
Fetch calls are made on this endpoint to fetch information about the different distilleries listed on the auction site. It returns the name, slug, country of origin, their rating, how many votes were counted for that rating, and how many varieties they produce.

### /auctions_data
Fetch calls are made on this endpoint to fetch information about ten random auction names and the winning bids. It then returns 
the data for these things and puts them in a two column table format.

## Known issues for the future
-The scatter plot for ratings currently requires the page to be resized for the information to load. It also needs to be refreshed when to view another country's data.

## Future development
API's can be replaced and remodified for user needs: site is modified to be adaptable within circumstances as well.

Plans to incorporate more interractive parts within the site: graph modification, security protocol,  interface updates, etc.

Through user testing and multiple trial-and-error states, we plan to improve the usability and add accessibility features as well based on currently existiing API's and code infrastruture to the site.