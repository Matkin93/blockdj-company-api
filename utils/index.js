module.exports.createRefObj = (data, docs, key, doc_key) => {
    return data.reduce((data, datum, i) => {
        data[datum[key]] = docs[i][doc_key];
        return data;
    }, {});
}

module.exports.formatAreaData = (areasData, cityRefs) => {
    return areasData.map(areaDatum => {
        const city = cityRefs[areaDatum.city];
        return {...areaDatum, city};
    });
}

module.exports.formatPlaylistData = (playlistData, companyRefs) => {
    return playlistData.map(playlistDatum => {
        const company = companyRefs[playlistDatum.company];
        return {...playlistDatum, company};
    });
}

module.exports.formatTrackData = (trackData, playlistRefs) => {
    return trackData.map(trackDatum => {
        const playlist = playlistRefs[trackDatum.playlist];
        return {...trackDatum, playlist};
    });
}

module.exports.formatOfferData = (offerData, areaRefs, companyRefs) => {
    return offerData.map(offerDatum => {
        const company_id = companyRefs[offerDatum.company_id];
        const areas = [];
        offerDatum.areas.forEach(areaDatum => {
            areas.push(areaRefs[areaDatum])
        });
        return {...offerDatum, company_id, areas};
    });    
}
