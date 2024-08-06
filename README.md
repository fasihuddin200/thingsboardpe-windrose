# thingsboardpe-windrose
A JavaScript windrose widget for ThingsBoard Professional Edition.

This repository contains two custom windrose widgets for ThingsBoard PE. These widgets display wind data in a polar coordinate system, offering two distinct functionalities: 
1. Sum of wind speeds in all directions.
2. Average wind speeds in all directions.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
These custom widgets are built using JavaScript, HTML, and CSS. They utilize the ECharts library to create the windrose charts, which visually represent wind data in a user-friendly manner.

## Features
- **Sum Windrose Widget:** Displays the sum of wind speeds in various directions.
- **Average Windrose Widget:** Displays the average wind speeds in various directions.
- Responsive design to adapt to different screen sizes.

## Installation
### Prerequisites
- ThingsBoard PE instance
- Basic knowledge of ThingsBoard widget development

### Steps
1. Clone this repository:
    ```sh
    git clone https://github.com/fasihuddin200/thingsboardpe-windrose.git
    ```
2. Navigate to the ThingsBoard PE dashboard where you want to add these widgets.
3. Import the widget files (HTML, CSS, JS) to ThingsBoard PE.

## Usage
### Adding the Widgets to ThingsBoard
1. Go to the ThingsBoard PE dashboard.
2. Create a new widget and choose the "Advanced" option.
3. Copy the content of `sum.html`, `sum.css`, and `windrose_sum.js` to the appropriate sections for the Sum Windrose Widget.
4. Repeat the same process for the Average Windrose Widget using `avg.html`, `avg.css`, and `windrose_avg.js`.

### Data Configuration
Make sure your ThingsBoard PE instance has the necessary data keys:
- `Wind_Direction_Sensor`: Timeseries data for wind direction (in degrees).
- `Wind_Speed`: Timeseries data for wind speed (in km/h).

### Example
To visualize wind data:
1. Add the Sum Windrose Widget or Average Windrose Widget to your dashboard.
2. Configure the data source to use your wind direction and speed sensors.
3. The widget will automatically update and display the windrose chart based on the provided data.

## File Structure
Here's a detailed README.md file for your GitHub repository:

# ThingsBoard PE Custom Windrose Widgets

This repository contains two custom windrose widgets for ThingsBoard PE. These widgets display wind data in a polar coordinate system, offering two distinct functionalities: 
1. Sum of wind speeds in all directions.
2. Average wind speeds in all directions.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
These custom widgets are built using JavaScript, HTML, and CSS. They utilize the ECharts library to create the windrose charts, which visually represent wind data in a user-friendly manner.

## Features
- **Sum Windrose Widget:** Displays the sum of wind speeds in various directions.
- **Average Windrose Widget:** Displays the average wind speeds in various directions.
- Responsive design to adapt to different screen sizes.

## Installation
### Prerequisites
- ThingsBoard PE instance
- Basic knowledge of ThingsBoard widget development

### Steps
1. Clone this repository:
    ```sh
    git clone https://github.com/yourusername/thingsboard-windrose-widgets.git
    ```
2. Navigate to the ThingsBoard PE dashboard where you want to add these widgets.
3. Import the widget files (HTML, CSS, JS) to ThingsBoard PE.

## Usage
### Adding the Widgets to ThingsBoard
1. Go to the ThingsBoard PE dashboard.
2. Create a new widget and choose the "Advanced" option.
3. Copy the content of `sum.html`, `sum.css`, and `sum.js` to the appropriate sections for the Sum Windrose Widget.
4. Repeat the same process for the Average Windrose Widget using `avg.html`, `avg.css`, and `windrose_avg.js`.

### Data Configuration
Make sure your ThingsBoard PE instance has the necessary data keys:
- `Wind_Direction_Sensor`: Timeseries data for wind direction (in degrees).
- `Wind_Speed`: Timeseries data for wind speed (in km/h).

### Example
To visualize wind data:
1. Add the Sum Windrose Widget or Average Windrose Widget to your dashboard.
2. Configure the data source to use your wind direction and speed sensors.
3. The widget will automatically update and display the windrose chart based on the provided data.

## File Structure
thingsboard-windrose-widgets/
│
├── avg.css           # Styles for the Average Windrose Widget
├── avg.html          # HTML structure for the Average Windrose Widget
├── windrose_avg.js   # JavaScript logic for the Average Windrose Widget
│
├── sum.css           # Styles for the Sum Windrose Widget
├── sum.html          # HTML structure for the Sum Windrose Widget
├── windrose_sum.js   # JavaScript logic for the Sum Windrose Widget
│
├── resources.txt      # Resources used in the project
│
└── README.md         # This README file

## Contributing
Contributions are welcome! Please fork this repository and submit pull requests with any improvements or bug fixes.

### Steps to Contribute
1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or suggestions, please reach out to:
- Fasih Ud Din - [fasihuddin102@gmail.com](mailto:fasihuddin102@gmail.com)