import Application from 'ember-colorpalette/app';
import config from 'ember-colorpalette/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
