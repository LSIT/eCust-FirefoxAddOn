// Constants.js
var pkg = require( "../../package.json" ),
    osFileManagerName = require( "../utils/os-util" ).getFileManagerDisplayName;

exports.APP = {
    name: pkg.name,
    title: pkg.title,
    version: pkg.version
};

exports.MESSAGES = {
    ERROR: {
        BAD_LINK: "Impossible d'ouvrir le dossier, il n'existe certainement pas : "
    },
    FILEMANAGER: osFileManagerName(),
    USERMESSAGES: {
        tooltips: {
            openFolder: 'Ouvrir dossier',
            linkText: 'Ouvrir lien'
        }
    }
};
