const UniqueID = require("@/features/UniqueID");
exports.uid = () => {const uuid = UniqueID().getID()
    return {
        uuid
    }}