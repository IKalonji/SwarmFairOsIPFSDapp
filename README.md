<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/IKalonji/SwarmFairOsIPFSDapp">
    <img src="images/mobileDstorage.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Mobile Decentralized Storage</h3>

  <p align="center">
    An awesome lightweight decentralized mobile storage dapp deployed on Kardiachain! 
    <br />
    <a href="https://github.com/IKalonji/SwarmFairOsIPFSDapp/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.youtube.com/watch?v=qS4lHH8TzT8">View Demo</a>
    ·
    <a href="https://github.com/IKalonji/SwarmFairOsIPFSDapp/issues">Report Bug</a>
    ·
    <a href="https://github.com/IKalonji/SwarmFairOsIPFSDapp/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## Live Demo

https://mobile-dstorage.vercel.app/


<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/IKalonji/SwarmFairOsIPFSDapp/blob/main/README.md)

Mobile Decentralized Storage is a dapp that allows for starage on the go.

Here's why:
* Simple to use. 
* Lightweight
* 3 decentralized cloud storage providers 


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Swarm-JS](https://docs.ethswarm.org/docs/)
* [FairOS-JS](https://docs.fairos.fairdatasociety.org/docs/fairOS-dfs/api-reference/)
* [IPFS](https://ipfs.io/)
* [Ionic](https://ionicframework.com/)
* [Angular](https://angular.io/)
* [Unstoppable-Domains](https://docs.unstoppabledomains.com/login-with-unstoppable/login-integration-guides/login-ui-configuration/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Notice

1. This project is not audited and should not be used in a production environment.
2. The project was built on Windows and has not been tested on any Linux distro, but it should run since the tools used are cross platform. 

<!-- GETTING STARTED -->
## Getting Started

Follow the steps below on how to run the project.

### Prerequisites

Please install the below required software in order to run the project.

* NodeJs
  [NodeJS](https://nodejs.org/about/releases)

* Bee node
  [Swarm](https://docs.ethswarm.org/docs/)

* FairOS Node
  [FairOS](https://docs.fairos.fairdatasociety.org/docs/fairOS-dfs/api-reference/)

* ionic
  ```sh
    npm install -g @ionic/cli
  ```

* Install Android Studio
  [Android Studio](https://developer.android.com/studio)

* Add Kardiachain demo wallet private key to hardhat.config.js
```sh
const PRIVATE_KEY = "PRIVATE KEY HERE";  
```

* Physical Android device

### Installation 

1. Clone the repo
   ```sh
   git clone https://github.com/IKalonji/SwarmFairOsIPFSDapp.git
   ```
2. cd into the Ionic frontend install dependecies then paste the necessary keys in the environment.ts as well as the enviroment.prod.ts files:
  ```sh
  cd SwarmFairOsIPFSDapp
  npm install
  ```
3. Now, we can build the frontend with Ionic and create an APK with Android Studio. In the terminal run:
  ```sh
  ionic capacitor build android
  ```

  Android Studio should open automatically once the build is complete. If not open the Ionic/Frontendandroid folder in Android Studio.

4. Finally, use one of the two options to run the app:
  * Option 1:
    In Android Studio, click on the build tab in the navigation bar and select 'Generate APK'. Complete the steps and navigate to the folder where the APK was generated. Send the APK to your Android device and install. 
  * Option 2:
    Connect an Android device to your PC and select your device under the devices section of the navigation bar, then run the app.


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

[Unstoppable Domains Integration](https://youtu.be/oi0qk-Uw0D0)

[Video Demo](https://www.youtube.com/watch?v=qS4lHH8TzT8)

[![Unstoppable Domains Integration](https://img.youtube.com/vi/oi0qk-Uw0D0/0.jpg)](https://youtu.be/oi0qk-Uw0D0)

[![DEMO Video](https://img.youtube.com/vi/qS4lHH8TzT8/0.jpg)](https://youtu.be/qS4lHH8TzT8)

_Please refer to the [Documentation](https://github.com/IKalonji/SwarmFairOsIPFSDapp/blob/main/README.md)_

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Pods
- [ ] Share files


See the [open issues](https://github.com/IKalonji/SwarmFairOsIPFSDapp/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See https://opensource.org/licenses/MIT for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Issa Kalonji - [@ISSDawg](https://twitter.com/ISSDawg) - ikalonji@student.wethinkcode.co.za

Project Link: [https://github.com/IKalonji/SwarmFairOsIPFSDapp](https://github.com/IKalonji/SwarmFairOsIPFSDapp)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Swarm](https://docs.ethswarm.org/docs/)
* [FairOS](https://docs.fairos.fairdatasociety.org/docs/fairOS-dfs/api-reference/)
* [IPFS](https://ipfs.io/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/IKalonji/SwarmFairOsIPFSDapp.svg?style=for-the-badge
[contributors-url]: https://github.com/IKalonji/SwarmFairOsIPFSDapp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/IKalonji/SwarmFairOsIPFSDapp.svg?style=for-the-badge
[forks-url]: https://github.com/IKalonji/SwarmFairOsIPFSDapp/network/members
[stars-shield]: https://img.shields.io/github/stars/IKalonji/SwarmFairOsIPFSDapp.svg?style=for-the-badge
[stars-url]: https://github.com/IKalonji/SwarmFairOsIPFSDapp/stargazers
[issues-shield]: https://img.shields.io/github/issues/IKalonji/SwarmFairOsIPFSDapp.svg?style=for-the-badge
[issues-url]: https://github.com/IKalonji/SwarmFairOsIPFSDapp/issues
[license-shield]: https://img.shields.io/github/license/IKalonji/SwarmFairOsIPFSDapp.svg?style=for-the-badge
[license-url]: https://github.com/IKalonji/SwarmFairOsIPFSDapp/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/issa-kalonji-b301851ba/
[product-screenshot]: images/mobileImage.png
