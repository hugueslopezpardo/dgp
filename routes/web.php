<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/program', function () {
    return Inertia::render('Program');
});

Route::get('/resources', function () {
    return Inertia::render('Resources');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/participate', function () {
    return Inertia::render('Participate');
});
