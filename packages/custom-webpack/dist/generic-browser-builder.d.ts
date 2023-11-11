import { BuilderContext, BuilderHandlerFn } from '@angular-devkit/architect';
import { ExecutionTransformer } from '@angular-devkit/build-angular';
import { IndexHtmlTransform } from '@angular-devkit/build-angular/src/utils/index-file/index-html-generator';
import { Configuration } from 'webpack';
import { json } from '@angular-devkit/core';
export interface BrowserTargetOptions {
    buildTarget?: string;
    browserTarget?: string;
}
export type BuilderExecutor<O extends BrowserTargetOptions & json.JsonObject> = (options: O, context: BuilderContext, transforms?: {
    webpackConfiguration?: ExecutionTransformer<Configuration>;
    indexHtml?: IndexHtmlTransform;
}) => any;
export declare const executeBrowserBasedBuilder: <O extends BrowserTargetOptions & json.JsonObject>(executebBuilder: BuilderExecutor<O>) => BuilderHandlerFn<O>;