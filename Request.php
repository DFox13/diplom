<?php

class Request
{
function buildURL(string $request){
    $purl = parse_url($request);

    if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($purl['query'])) {
        parse_str($purl['query'], $_GET);
    }

    return $purl['path'];
}
}