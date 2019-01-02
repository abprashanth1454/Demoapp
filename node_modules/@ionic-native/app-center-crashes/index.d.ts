import { IonicNativePlugin } from '@ionic-native/core';
export interface AppCenterCrashReport {
    id: string;
    device: AppCenterCrashReportDevice;
    appStartTime: number;
    appErrorTime: number;
    signal: string;
    appProcessIdentifier: number;
}
export interface AppCenterCrashReportDevice {
    oem_name: string;
    os_name: string;
    app_version: string;
    time_zone_offset: number;
    carrier_name: string;
    screen_size: string;
    locale: string;
    sdk_version: string;
    carrier_country: string;
    os_build: string;
    app_namespace: string;
    os_version: string;
    sdk_name: string;
    model: string;
    app_build: string;
}
/**
 * @name App Center Crashes
 * @description
 * App Center Analytics helps you understand user behavior and customer engagement to improve your app.
 * The SDK automatically captures session count and device properties like model, OS version, etc.
 * You can define your own custom events to measure things that matter to you.
 * All the information captured is available in the App Center portal for you to analyze the data.
 *
 * For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/crashes/cordova
 *
 * @usage
 * ```typescript
 * import { AppCenterCrashes } from '@ionic-native/app-center-crashes';
 *
 *
 * constructor(private AppCenterCrashes: AppCenterCrashes) { }
 *
 * ...
 *
 * this.AppCenterCrashes.setEnabled(true).then(() => {
 *    this.AppCenterCrashes.lastSessionCrashReport().then(report => {
 *        console.log('Crash report', report);
 *    });
 * });
 *
 * ```
 * @interfaces
 * AppCenterCrashReport
 * AppCenterCrashReportDevice
 */
export declare class AppCenterCrashes extends IonicNativePlugin {
    /**
     * App Center Crashes provides you with an API to generate a test crash for easy testing of the SDK.
     * This API can only be used in test/beta apps and won't do anything in production apps.
     * @returns void
     */
    generateTestCrash(): void;
    /**
     * At any time after starting the SDK, you can check if the app crashed in the previous launch
     * @returns {Promise<boolean>}
     */
    hasCrashedInLastSession(): Promise<boolean>;
    /**
     * Details about the last crash
     * @returns {Promise<AppCenterCrashReport>}
     */
    lastSessionCrashReport(): Promise<AppCenterCrashReport>;
    /**
     * Check if App Center Crashes is enabled
     * @returns {Promise<boolean>}
     */
    isEnabled(): Promise<boolean>;
    /**
     * Enable or disable App Center Crashes at runtime
     * @param  {boolean} shouldEnable Set value
     * @returns {Promise<void>}
     */
    setEnabled(shouldEnable: boolean): Promise<void>;
}
