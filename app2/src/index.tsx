/**
 * As we are exposing some modules via module federation, they become asynchronously.
 * That means they are not ready on the initial render, which returns the following error:
 * Uncaught Error: Shared module is not available for eager consumption
 * In order to sort it out, we have to turn the entry point asynchronous as well.
 *  */
import(/* webpackChunkName: "bootstrap" */ './bootstrap');
