<?php

function buildURL(string $request){
    $purl = parse_url($request);

    if ($purl && array_key_exists("query", $purl)) {
        if ($_SERVER['REQUEST_METHOD'] === 'GET'){
            parse_str($purl["query"], $_GET);
        }
    }
    return $purl['path'];
}