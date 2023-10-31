import { LINUX, MAC, WINDOWS } from '../../../../constants'

type ExecClientData = {
  icon: string
  general: string
  documentation: Record<string, string>
}

type Documentation = Record<string, ExecClientData>

export const DOCUMENTATIONS: Documentation = {
  Nethermind: {
    icon: '/icons/nethermind-circle.png',
    general:
      'Ethereum’s long awaited shift from Proof of Work (POW) to Proof of Stake (POS) known as The Merge happened on September 15, 2022 and came with fundamental changes to the network. The most notable change is the addition of the Beacon chain (Consensus layer) which replaced Proof of Work mining. It is coordinating and pseudorandomly selecting block producers from the pool of stakers / validators in a way that makes it extremely difficult for validators to coordinate attacks on the network.\n\nThe Merge changed how operators run nodes on the Ethereum blockchain. A node now needs **two** clients that work together as a pair. In addition to the Execution Layer client (e.g. Nethermind) you need a Consensus Layer client that connects to the Beacon chain and runs the POS algorithm.',
    documentation: {
      [MAC]:
        '### macOS\n\nRun the following commands to add the Nethermind repository to your local Homebrew and install:\n\n```\nbrew tap nethermindeth/nethermind\nbrew install nethermind\n```',
      [WINDOWS]:
        '### Windows\n\nOn Windows, all you have to do is install and unzip the packages. There are two sources that you can download from:\n\n- [Nethermind - Downloads](https://downloads.nethermind.io/)\n- [Releases - NethermindEth/nethermind](https://github.com/NethermindEth/nethermind/releases)',
      [LINUX]:
        '### Ubuntu\n\nRun the following commands to enable our launchpad repository and then install Nethermind:\n\n```\nsudo add-apt-repository ppa:nethermindeth/nethermind\nsudo apt install nethermind\n```',
    },
  },
  Besu: {
    icon: '/icons/hyperledger-besu-circle.png',
    general: '## Install binary distribution',
    documentation: {
      [MAC]:
        "### MacOS with Homebrew\n**Prerequisites**\n- [Homebrew](https://brew.sh/)\n- Java JDK\n\n**CAUTION**\n\nHyperledger Besu supports:\n\n- MacOS High Sierra 10.13 or later versions.\n- Java 17+. You can install Java using `brew install openjdk`. Alternatively, you can manually install the [Java JDK](https://www.oracle.com/java/technologies/downloads/).\n\n**Install (or upgrade) using Homebrew**\n\nTo install Besu using Homebrew:\n```\nbrew tap hyperledger/besu\nbrew install hyperledger/besu/besu\n```\nTo upgrade an existing Besu installation using Homebrew:\n```\nbrew upgrade hyperledger/besu/besu\n```\n**NOTE**\n\nIf you've upgraded your MacOS version between installing and upgrading Besu, when running `brew upgrade hyperledger/besu/besu` you may be prompted to reinstall command line tools with `xcode-select --install`.\n\n**NOTE**\n\nWhen upgrading Besu, you might be prompted to fix the remote branch names in Homebrew by using the command `brew tap --repair`.\n\nTo display the Besu version and confirm installation:\n```\nbesu --version\n```\nTo display Besu command line help:\n```\nbesu --help\n```",
      [WINDOWS]: '',
      [LINUX]:
        '### Linux / Unix\n**Prerequisites**\n- Java JDK 17+\n**LINUX OPEN FILE LIMIT**\nIf synchronizing to Mainnet on Linux or other chains with large data requirements, increase the maximum number of open files allowed using `ulimit`. If the open files limit is not high enough, a `Too many open files RocksDB` exception occurs.\n**TIP**\nWe recommend installing `jemalloc` to reduce memory usage. If using Ubuntu, you can install it with the command: `apt install libjemalloc-dev`.\n**Install from packaged binaries**\nDownload the Besu packaged binaries.\n\nUnpack the downloaded files and change into the `besu-<release>` directory.\n\nDisplay Besu command line help to confirm installation:\n```bash\nbin/besu --help\n```',
    },
  },
  Geth: {
    icon: '/icons/gethereum-mascot-circle.png',
    general:
      'There are several ways to install Geth, including via a package manager, downloading a pre-built bundle, running as a docker container or building from downloaded source code. On this page the various installation options are explained for several major operating systems. Users prioritizing ease of installation should choose to use a package manager or prebuilt bundle. Users prioritizing customization should build from source. It is important to run the latest version of Geth because each release includes bugfixes and improvements over the previous versions. The stable releases are recommended for most users because they have been fully tested. A list of stable releases can be found [here](https://github.com/ethereum/go-ethereum/releases). Instructions for updating existing Geth installations are also provided in each section.\n\n## Package managers',
    documentation: {
      [MAC]:
        "### MacOS via Homebrew\nThe easiest way to install go-ethereum is to use the Geth Homebrew tap. The first step is to check that Homebrew is installed. The following command should return a version number.\n\n`brew -v`  \n\nIf a version number is returned, then Homebrew is installed. If not, Homebrew can be installed by following the instructions [here](https://brew.sh/). With Homebrew installed, the following commands add the Geth tap and install Geth:\n\n`brew tap ethereum/ethereum`  \n`brew install ethereum`  \n\nThe previous command installs the latest stable release. Developers that wish to install the most up-to-date version can install the Geth repository's master branch by adding the `--devel` parameter to the install command:\n\n`brew install ethereum --devel`  \n\nThese commands install the core Geth software and the following developer tools: `clef`, `devp2p`, `abigen`, `bootnode`, `evm`, and `rlpdump`. The binaries for each of these tools are saved in `/usr/local/bin/`. The full list of command line options can be viewed [here](https://geth.ethereum.org/docs/fundamentals/command-line-options) or in the terminal by running `geth --help`.\n\nUpdating an existing Geth installation to the latest version can be achieved by stopping the node and running the following commands:\n\n`brew update`  \n`brew upgrade`  \n`brew reinstall ethereum`  \n\nWhen the node is started again, Geth will automatically use all the data from the previous version and sync the blocks that were missed while the node was offline.",
      [WINDOWS]:
        "### Windows\nThe easiest way to install Geth is to download a pre-compiled binary from the [downloads](https://geth.ethereum.org/downloads) page. The page provides an installer as well as a zip file containing the Geth source code. The install wizard offers the user the option to install Geth, or Geth and the developer tools. The installer adds `geth` to the system's `PATH` automatically. The zip file contains the command `.exe` files that can be run from the command prompt. The full list of command line options can be viewed [here](https://geth.ethereum.org/docs/fundamentals/command-line-options) or in the terminal by running `geth --help`.\n\nUpdating an existing Geth installation can be achieved by stopping the node, downloading and installing the latest version following the instructions above. When the node is started again, Geth will automatically use all the data from the previous version and sync the blocks that were missed while the node was offline. ",
      [LINUX]:
        '### Ubuntu via PPAs \nThe easiest way to install Geth on Ubuntu-based distributions is with the built-in launchpad PPAs (Personal Package Archives). A single PPA repository is provided, containing stable and development releases for Ubuntu versions `xenial`, `trusty`, `impish`, `focal`, `bionic`. \n\nThe following command enables the launchpad repository:\n```\nsudo add-apt-repository -y ppa:ethereum/ethereum\n``` \n\nThen, to install the stable version of go-ethereum: \n```\nsudo apt-get update \nsudo apt-get install ethereum\n``` \n\nOr, alternatively the develop version: \n```\nsudo apt-get update \nsudo apt-get install ethereum-unstable\n``` \n\nThese commands install the core Geth software and the following developer tools: `clef`, `devp2p`, `abigen`, `bootnode`, `evm` and `rlpdump`. The binaries for each of these tools are saved in `/usr/local/bin/`. The full list of command line options can be viewed [here](https://geth.ethereum.org/docs/fundamentals/command-line-options) or in the terminal by running `geth --help`.\n\nUpdating an existing Geth installation to the latest version can be achieved by stopping the node and running the following commands: \n```\nsudo apt-get update \nsudo apt-get install ethereum \nsudo apt-get upgrade geth\n``` \n\nWhen the node is started again, Geth will automatically use all the data from the previous version and sync the blocks that were missed while the node was offline.',
    },
  },
  Erigon: {
    icon: '/icons/erigon-circle.png',
    general:
      "In order to use Erigon, the software has to be installed first. There are several ways to install Erigon, depending on the operating system and the user's choice of installation method, e.g. using a package manager, container or building from source.",
    documentation: {
      [MAC]:
        '### Linux and MacOS\n\n**How to install Erigon in Linux and MacOS**\n\nThe basic Erigon configuration is suitable for most users just wanting to run a node. For building the latest stable release use the following command:\n\n```bash\ngit clone --branch v2.52.5 --single-branch https://github.com/ledgerwatch/erigon.git\ncd erigon\nmake erigon\n```\n\nYou can check the [list of releases](https://github.com/ledgerwatch/erigon/releases) for release notes.',
      [WINDOWS]:
        '### Windows\n**How to install Erigon in Windows**\n\nWindows users can run Erigon in 3 possible ways:\n- [Build executable binaries natively for Windows](https://erigon.gitbook.io/erigon/basic-usage/getting-started/windows#build-executable-binaries-natively-for-windows)\n- [Use Docker](https://erigon.gitbook.io/erigon/basic-usage/getting-started/windows#use-docker)\n- [Use Windows Subsystem for Linux. (WSL)](https://erigon.gitbook.io/erigon/basic-usage/getting-started/windows#use-windows-subsystem-for-linux-wsl)\n\n## Build executable binaries natively for Windows\nBefore proceeding, ensure that the general [requirements](https://erigon.gitbook.io/erigon/basic-usage/getting-started#prerequisites) are met.\n\n**Installing Chocolatey**\n\nInstall Chocolatey package manager by following [these instructions](https://docs.chocolatey.org/en-us/choco/setup).\nOnce your Windows machine has the above installed, open the **Command Prompt** by typing "**cmd**" in the search bar and check that you have correctly installed Chocolatey:\n```\nchoco -v\n```\nNow you need to install the following components: `cmake`, `make`, `mingw` by:\n```\nchoco install cmake make mingw\n```\n**Important note about Anti-Virus:** During the compiler detection phase of MinGW, some temporary executable files are generated to test the compiler capabilities. It\'s been reported that some anti-virus programs detect these files as possibly infected with the `Win64/Kryptic.CIS` Trojan horse (or a variant of it). Although these are false positives, we have no control over the 100+ vendors of security products for Windows and their respective detection algorithms and we understand that this may make your experience with Windows builds uncomfortable. To work around this, you can either set exclusions for your antivirus software specifically for the `build\\bin\\mdbx\\CMakeFiles` subfolder of the cloned repo, or you can run Erigon using the other two options below.\n\nMake sure that the Windows System Path variable is set correctly. Use the search bar on your computer to search for “**Edit the system environment variable**”.\n\nClick the “**Environment Variables...**” button.\n\nLook down at the "**System variables**" box and double click on "**Path**" to add a new path.\n\nThen click on the "**New**" button and paste the path here:\n```\nC:\\ProgramData\\chocolatey\\lib\\mingw\\tools\\install\\mingw64\\bin\n```\n\n**Clone the Erigon repository**\n\nOpen the Command Prompt and type the following:\n```\ngit clone --branch v2.49.2 --single-branch https://github.com/ledgerwatch/erigon.git\n```\n\n**Compiling Erigon**\n\nTo compile Erigon there are two alternative methods:\n- [Compiling from the wmake.ps1 file in the File Explorer](https://erigon.gitbook.io/erigon/basic-usage/getting-started/windows#compiling-from-the-wmake.ps1-file-in-the-file-explorer)\n- [Using the PowerShell CLI](https://erigon.gitbook.io/erigon/basic-usage/getting-started/windows#using-the-powershell-cli)\n\n**Compiling from the wmake.ps1 file in the File Explorer**\n\nThis is the fastest way which normally works for everyone. Open the File Explorer and go to the Erigon folder, then right click the wmake file and choose "**Run with PowerShell**"\n\nPowerShell will compile Erigon and all of its modules. All binaries are placed in the .\\build\\bin\\ subfolder.\n\n**Using the PowerShell CLI**\n\nIn the search bar on your computer, search for “**Windows PowerShell**” and open it.\n\nChange the working directory to "**erigon**"\n```\ncd erigon\n```\nBefore proceeding make sure that the [Set-Execution Policy](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.3) PowerShell execution running policies are correct for your Windows account.\n\nNow you can compile Erigon and/or any of its component:\n```\n.\\wmake.ps1 [-target] <targetname>\n```\nFor example, to build the Erigon executable write:\n```\n.\\wmake.ps1 erigon\n```\nAll binaries are placed in the `.\\build\\bin\\` subfolder.\n\n### Use Docker\nSee [docker-compose.yml](https://github.com/ledgerwatch/erigon/blob/devel/docker-compose.yml).\n\n### Use Windows Subsystem for Linux (WSL)\nWSL enables running a complete GNU/Linux environment natively within Windows 10, providing Linux compatibility without the performance overhead of traditional virtualization.\n\nTo install WSL, follow the instructions [here](https://learn.microsoft.com/en-us/windows/wsl/install).\n\n**Information:** WSL Version 2 is the only version supported.\n\nUnder this option you can build Erigon as you would on a regular Linux distribution (see detailed instructions [here](https://erigon.gitbook.io/erigon/basic-usage/getting-started/linux-and-macos)).\n\nYou can also point your data to any of the mounted Windows partitions ( e.g. `/mnt/c/[...], /mnt/d/[...]` etc..) but be aware that performance will be affected: this is due to the fact that these mount points use `DrvFS`, which is a network file system, and additionally MDBX locks the db for exclusive access, meaning that only one process at a time can access the data.\n\n**Warning**: the remote db RPCdaemon is an experimental feature and is not recommended, it is extremely slow. It is highly preferable to use the embedded RPCdaemon.\n\nThis has implications for running `rpcdaemon`, which must be configured as a remote DB, even if it is running on the same machine. If your data is hosted on the native Linux filesystem instead, there are no restrictions. Also note that the default WSL2 environment has its own IP address, which does not match the network interface of the Windows host: take this into account when configuring NAT on port 30303 on your router.',
      [LINUX]:
        '### Linux and MacOS\n\n**How to install Erigon in Linux and MacOS**\n\nThe basic Erigon configuration is suitable for most users just wanting to run a node. For building the latest stable release use the following command:\n\n```bash\ngit clone --branch v2.52.5 --single-branch https://github.com/ledgerwatch/erigon.git\ncd erigon\nmake erigon\n```\n\nYou can check the [list of releases](https://github.com/ledgerwatch/erigon/releases) for release notes.',
    },
  },
  Nimbus: {
    icon: '/icons/nimbus-disabled.svg',
    general: '',
    documentation: {
      [MAC]: 'Text for mac',
      [WINDOWS]: 'Text for windows',
      [LINUX]: 'Text for linux',
    },
  },
}
