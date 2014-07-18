kineo-essentials-source
=======================

This repository contains all source code for the Kineo Essentials project. It must be used as the basis for all modules. Will be updated by Kineo as and when required. It will only be updated by Kineo, for suppliers to download and their copy.

This codebase is based on the [Adapt Open Source Software (OSS) product,] (https://github.com/adaptlearning/adapt_framework/wiki) with modifications specific to this product. Because of these modifications it is important that only this codebase is used as a basis for all modules. These modifications are fairly minor so that for anybody familiar with Adapt, there shouldn't be much noticeable difference. The key differences are in the plugins used and the data they require - which is explained thoroughly in the [wiki] (https://github.com/cgkineo/kineo-essentials-source/wiki).


It is assumed that all development companies have the basic required knowledge of Adapt, and associated technologies i.e. Git, Grunt, Node, JSON etc. Kineo will not provide support on the fundamentals of these technologies.  

The points of reference for checking work should be the page 101 developed by Kineo, the extension links in the [wiki] (https://github.com/cgkineo/kineo-essentials-source/wiki), and the example.json file in each extension repository.

Kineo will continue to update this branch to improve features and address bug fixes (all issues must be reported on the supplied Kineo Trac site). With regard to this codebase, all that is required is to pull the updated vesrion as and when Kineo communicate (via email) that it is appropriate to do so. Modules would then require to be rebuilt from the updated source (updating is a quick automated task using the grunt command _grunt buildall_)


## Upcoming updates
* Banked Assessment extension
* Guided Learning extension
* AA accessibility
* Final certificate (on quiz passed)
* SCORM tracking of flagged learning data
