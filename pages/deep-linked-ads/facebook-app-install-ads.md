---
title: Facebook App Install Ads
---
## Overview

Branch links can be used together with Facebook App Install Campaign ads, allowing you to track ad-driven installs on the Branch dashboard and deep link those new users directly to content the first time they open your app.

Note: This documentation applies for Ad placements across Facebook and the Audience Network.

This documentation supports the following Facebook Ad Campaign types:

Facebook Campaign Category | Campaign Type/Objective | Branch Ad Format
--- | --- | ---
Consideration | App Installs | App Only: Install

### Facebook Campaign Advert Format Support Table

Facebook Campaign Type | Photo | Video | Carousel | Slideshow | Collection | Dynamic | Canvas
--- | --- | --- | --- | --- | --- | --- | ---
App Installs | ✔︎ | ✔︎ | ✔︎ | ✔︎ | - | - | ✔︎

!!! note ""
	Looking for other Facebook Ad campaign types? Please check out our [Facebook Ads Overview guide](/deep-linked-ads/facebook-ads-overview).

## Setup

!!! warning "Prerequisites"
	* [x] To track installs from Facebook Ads you should [integrate the Branch SDK](/apps/ios/#integrate-branch) into your app.
	* [x] To use Branch links in Facebook App Install Ads ensure you have:
		* [x] URI schemes configured on iOS
		* [x] URI schemes configured on Android
		* [x] iOS App Store ID set
		* [x] Android Package Name set
		* [x] Social Media Settings filled out (i.e. OG tags at the bottom of [Link Settings](/links/default-link-behavior/#social-media))
	* [x] If you want to deep link from your ads directly to content, you should [configure deep link routing](/deep-linking/routing/).
	* [x] Ads is a premium product priced on Monthly Active Users. Sign up for the Ads product to enable this functionality.

	#### Enable Facebook as an Ad Partner (for measurement)

	!!! Note
	    Completing this section -- "Enable Facebook as an Ad Partner" -- will result in Branch sending app events to Facebook in order to attribute them back to ad campaigns. <notranslate>**This does not enable deep linking for the ad**</notranslate>. Further work below is required for deep linking.

	If you haven't enabled Facebook as an Ad Partner on the Branch dashboard follow this section to do so. Advanced options for sending events can be found [here](/deep-linked-ads/facebook-ads-faq/#facebook-mmp-event-options).

	1. Navigate to the [Partner Management tab](https://dashboard.branch.io/ads/partner-management).

	    ![Ads Partner Management](/_assets/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/ads-partner-management.png)

	1. Search for <notranslate>**Facebook**</notranslate>.

	1. Click <notranslate>**Connect With Facebook**</notranslate>

	    ![Connect with Facebook](/_assets/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/1-connect.png)

	1. Login to Facebook if you are not logged in

	    ![Login](/_assets/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/2-login.png)

	1. Confirm that Branch can receive your public profile

	    ![Public profile](/_assets/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/3-profile.png)

	1. Confirm that Branch can have permissions `ads_read`

	    ![OAuth scopes](/_assets/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/4-scopes.png)

	 	`ads_read` is used to surface impressions and clicks on the Branch Dashboard.

	1. Select the ad accounts for which you want to run app install ads or app engagement ads

	    ![Choose ad accounts](/_assets/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/5-adaccounts.png)

	    !!! Note
	        If you are having trouble finding or selecting the ad account(s) for which you want to run ads, please visit our [FAQ](/deep-linked-ads/facebook-ads-faq/#im-having-problems-finding-or-choosing-the-correct-ad-accounts).

	1. Click to select a Facebook app id for which you want to run Facebook ads

	    ![enter app id](/_assets/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/6-app-1.png)

	1. Copy the app id

	    ![find app id](/_assets/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/7-app-2.png)

	1. Paste the app id and press `Save`

	    ![paste app id](/_assets/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/8-app-3.png)

	1. Facebook is now enabled as an ad partner!

		Note that if you have different attribution windows between Facebook and Branch, those will be highlighted. The warning has a link to the docs on how to align these attribution windows.

	    ![complete](/_assets/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/9-complete.png)

	1. Finally, to create a Facebook Ads link click the <notranslate>**Create Facebook Link**</notranslate> button in the top right hand corner.

	    ![Create Facebook Ad Link](/_assets/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/create-facebook-link.png)


## Branch <> Facebook Field Mappings

Branch maps the following data fields from Facebook App Install Ads to Branch.

Facebook Data | Branch Data | Possible Values
--- | --- | ---
n/a | `~advertising_partner_name` | “Facebook”
n/a | `~channel` | “Facebook” if null or last touch
n/a | `~feature` | "Paid Advertising"
`campaign_name` | `~campaign` | Light Bright Launch
`campaign_id` | `~campaign_id` | 15292426
`publisher_platform` | `~secondary_publisher` | facebook / instagram / audience_network
`creative_name` | `~creative_name` | Light Bright Vertical
`creative_id` | `~creative_id` | 1234567890
`ad_set_name` | `~ad_set_name` | Light Bright
`ad_set_id` | `~ad_set_id` | 12345567890
`ad_name` | `~ad_name` | Light Bright

## Adding the Agency Tag to Campaign Name

Only agencies managing advertising campaigns on behalf of a client must prepend their <notranslate>**Agency ID**</notranslate> to the campaign name when creating advertising campaigns for Self-Attributing Networks (SANs).

!!! error "Agency ID Required"
	Failure to append the campaign name with the <notranslate>**Agency ID**</notranslate> will result in any subsequent conversion not being properly attributed to the responsible agency.

### Finding Your Agency ID

You can find your Agency ID under Account Settings in the [Agency view](/dashboard/agency-view/#managing-your-agency-profile).

### Creating Your Agency Tag

Your agency tag **must** adhere to the following format:

	`agency_{YOUR AGENCY ID HERE}_`


!!! info "Example Campaign with Agency tag"
 	`agency_1234567890_My_SAN_Ad_Campaign`

	You can append the Agency Tag to either the **beginning** or the **end** of the campaign name.

!!! warning "Agency ID Removed When Exporting"
	The "~campaign" value displayed in exports/analytics will not include the agency_id. If you set up a campaign called `test_campaign_agency_1234` in Facebook, and for any installs that came from that campaign, the "~campaign" value will be "test campaign".


### Cost Data

Branch provides the following cost metrics for this ad partner:

Analytics Tag | Description | Used for
--- | --- | ---
Cost| Total cost (spend) for those dimensions (analytics tags, user data, time range), regardless of cost model | Understanding the total amount spent
<notranslate>eCPI</notranslate> | cost / installs | Normalizing spend per install, to understand the average price of an install across networks or over time
<notranslate>eCPC</notranslate> | cost / clicks | Normalizing spend per click, to understand the average price of an click across networks or over time
<notranslate>eCPM</notranslate> | cost / (impressions / 1000) | Normalizing spend per thousand impressions, to understand the average price of 1000 impressions across networks or over time
<notranslate>eCPA</notranslate> | cost / purchases [includes web and app purchases] | Normalizing spend per purchase, to understand the average price of a purchase across networks or over time
<notranslate>Return On Investment (ROI)</notranslate> | (revenue-cost / cost) * 100 | Deriving return on investment, to understand the percentage "profit" made on ad spend
<notranslate>Return On Ad Spend (ROAS)</notranslate> | (revenue / cost) * 100 | Deriving return on investment by understanding the percentage revenue multiple for a given unit of spend

!!! info
    All cost data is ingested in local currency and then translated to USD on the dashboard using the exchange rate for that currency on the day the data is stored.  In effect, this means the dashboard shows the amount that campaign cost converted to USD at the time it ran.

### View Your Data

The [Ads Analytics Page](https://dashboard.branch.io/ads/analytics) on the Branch dashboard provides an interactive time series graph and table to view the performance of your Ad campaigns.

![Example Ads Analytics Graph](/_assets/img/ingredients/deep-linked-ads/view-ad-link-data/analytics-graph.png)

The table shows summary data on the performance of each Ad campaign. On the right top side of the table you can find a <notranslate>**download button**</notranslate> to retrieve the chart's content as a CSV file.

![Example Ads Table](/_assets/img/ingredients/deep-linked-ads/view-ad-link-data/analytics-table.png)

!!! note "Interacting with your data"
	Breakdown and compare aspects of your Ad campaigns' performance by using the `Compare by +` button to add a parameter to split the data displayed data by.

	Then use the `and +` button to refine the data displayed to gain deeper insight into the performance of your Ad campaigns.

## Optional: Deep link your app install campaign

This section is **not required for measurement** if you are running app-only ads. We will automatically pull in campaign, ad set, ad, and creative information from Facebook. However, if you want users to be deep linked, you should follow the instructions in this section.

### Configure your app to read Facebook App Install deep links

1. Unfortunately, we've found that the direct S2S mechanism for retrieving deep links is rather unreliable. We recommend that you have the Facebook [Android](https://developers.facebook.com/docs/android/getting-started) / [iOS](https://developers.facebook.com/docs/ios/getting-started) SDKs installed so Branch can work directly with them on the client side for the best outcome.
1. On Android, if you are using Proguard, make sure you add the necessary inclusions to keep the Facebook SDK during build time.

	```xml
	-keep class com.facebook.applinks.** { *; }
	-keepclassmembers class com.facebook.applinks.** { *; }
	-keep class com.facebook.FacebookSdk { *; }
	```

1. Tell Branch to use the Facebook SDK to read the App Links on initialization

	- *iOS - Objective C*

		```objc
		// This goes BEFORE initSession is called in didFinishLaunchingWithOptions
		[[Branch getInstance] registerFacebookDeepLinkingClass:[FBSDKAppLinkUtility class]]
		```

	- *Android - Java*

		```java
		// This goes in the getAutoInstance call in your Application class
		Branch.getAutoInstance(this).enableFacebookAppLinkCheck();
		```

### Create an Ad Link for deep linking

1. Create a Branch Ad link from the [Partner Management page](https://dashboard.branch.io/ads/partner-management) `Create Facebook Link` button under the Facebook Partner and select `App Install or Engagement`
<img src="/_assets/img/pages/deep-linked-ads/reusable-images/create-link-install-engagement.png" alt="Link Creation" class="half left">
1. Enter a Link Name for later reference.
1. Configure the link with the Ad Format set to <notranslate>**App Only**</notranslate>, the Ad Partner set to <notranslate>**Facebook**</notranslate>, and the Secondary Ad Format set to <notranslate>**App Install Ads**</notranslate>.
![Create Ad Link](/_assets/img/pages/deep-linked-ads/facebook-app-install-ads/link-setup.png)

1. Under the Configure Options tab, use the deep link data input section to add your deep linking parameters. You can use this configuration section to specify custom link parameters that will be deep linked into the app after install. These could include a coupon code or a page identifier to route the user. Visit the [Deep Link Routing](/deep-linking/routing/) page to learn more.
![Create Ad Link](/_assets/img/pages/deep-linked-ads/reusable-images/create-link-deep-link-data.png)

1. Because this is an app install ad, the redirect section will be largely ignored. We highly recommend that you leave this section untouched.
1. Analytics will be automatically pulled in from the direct Facebook integration above, and so you can ignore the analytics section of the configuration.

!!! warning ""
	In order for your campaign to run effectively, be sure to disable Deepviews. You can either [disable Deepviews](/web/deep-views/) for your entire account or [disable Deepviews for one link](/web/deep-views/#disable-per-link-deepviews).

### Configure your campaign to deep link the Ad Link

1. Navigate to [https://www.facebook.com/ads/create](https://www.facebook.com/ads/create) while logged in to the account that owns your Facebook app.
1. Select <notranslate>**App Installs**</notranslate> as the campaign marketing objective.
![Campaign Selection](/_assets/img/pages/deep-linked-ads/facebook-app-install-ads/campaign-selection.png)
1. Continue with campaign creation selecting the app to advertise, audience, placement, and budget. Then press continue to enter the Advert creation step.
1. Now select an advertisement format and customize your ad
1. Under the <notranslate>**Destination**</notranslate> field, you can select to direct your advertisement to the App Store or a Facebook Canvas Advertisement.
	- If you select the App Store, fill in the <notranslate>**Deep Link**</notranslate> field with your Branch Ad link

	![Deep Link Placement](/_assets/img/pages/deep-linked-ads/facebook-app-install-ads/deep-link.png)

	- If you select Canvas, add your Branch Ad link as the <notranslate>**Destination**</notranslate> Website URL for your canvas advertisement components

	![Canvas Setup](/_assets/img/pages/deep-linked-ads/facebook-app-install-ads/facebook-canvas-setup.png)

1. Complete the rest of the ad campaign setup.

Your Facebook Ad Campaign is now setup to use Branch Links to handle App Installs!

!!! note "Optional: Ad formats with Multiple Links"
	Some ad formats such as Carousel format can handle multiple deep links. To have link performance data on each image or component of the advertisement, create multiple Branch Ad links to be used in each part of the multiple link advertisement format. This format is useful if you want to drive customers to different content pieces or products.

### Testing Deep Linking from Ads

Unfortunately, the demo/preview ads used during the ads creation flow on Facebook use a different mechanism than live Facebook ads. **This prevents you from testing deep linking from your Facebook ads**. Do not waste time trying to get this to work. We've confirmed with Facebook representatives that this is broken.

The only way to test the deep linking functionality is outside of the actual ads system is a helper tool from Facebook. Follow these instructions to test the deep linking functionality:

1. Head to the [Ads tester tool](https://developers.facebook.com/tools/app-ads-helper/)
1. Choose the app that you're advertising with
1. Scroll down to the button that says 'Test Deep Link'
1. Paste in the Branch link
1. Check 'Send Deferred'
1. Click 'Send to iOS/Android'
1. Install the app and it should deep link!

!!! note "Note the following common mistakes for testing"
	1. If you reset the GAID or IDFA on a device, you must uninstall Facebook and re-install prior to testing. Facebook does not update the IDFA/GAID every time it's opened.
	2. Send deferred does not require a notification to be sent or to be clicked. Checking "Send Deferred" will automatically queue up a match for the test device with the deep link data. The notification is completely separate from deferred deep linking.
	3. The Facebook account on the desktop where you click "Send Deferred" must match the account logged into the test device for deferred deep link data to be queued up. Note that we've observed issues where you log in and out of multiple accounts on test devices that cause Facebook to not correctly queue up a match.
	4. If you see that someone liked your ad, do not bother trying to click and test it. Clicking your own, live advertisement that shows up in notifications will not deep link.

## Troubleshooting

We now have a dedicated [FAQ page for Facebook app ads](/deep-linked-ads/facebook-ads-faq/#sources-of-discrepancies-between-facebook-and-branch). If you are having any issues with app ads, please review the FAQ.

If you are having issues with web-only ads, you can check out the FAQ. Then please [contact us](https://support.branch.io/support/tickets/new) and include "Facebook web-only ads issues" in the subject.

#### Branch Cost data not matching the Ad Partner dashboard

Please ensure that you've selected the same time zone in your Ad Partner's dashboard and your Branch dashboard.

#### CPI metric doesn't match between Ad Partner and Branch, although cost metric does

Branch's last-click attribution model can lead to differences in install counts for Branch vs self-attributing networks (SANs) that in turn cause differences in CPI metrics. Verify whether your cost and install metrics match the Ad Partner's dashboard. If there is an install discrepancy, it is likely legitimate and due to differences in install counts, where Branch's number is more accurate. If the discrepancy is very large, investigate causes of install discrepancies through the usual troubleshooting steps.

#### Cost, click and impression data is all missing

Generally, reauthenticating a partner and waiting 24 hours will re-enable cost data.

When you reauthenticate, double check that you have selected the correct accounts. We will only pull cost data for accounts that you select as part of the authentication process.

Background:
Cost, click and impression data for SANs are generally sourced from Partner APIs (unless Branch impression pixels or links are being intentionally used for attribution, for example, in web campaigns). When you enable a SAN, you authenticate with your provider. Branch uses this authentication to retrieve click, cost and impression data. If the authentication token expires (for example, if you reset your password, or the partner force resets your token), then you may not see click, impression or cost data. In this case, simply reauthenticate and that will refresh your token.

#### Cost data is missing or incorrect for certain <notranslate>"compare by"</notranslate> breakdowns

Downstream events, such as _installs_, should always have the full range of compare by options in the dashboard. However, _clicks, impressions and cost_ data for SAN are often imported via Partner APIs. These APIs do not necessarily provide the same breakdowns for cost data that Branch supports with raw install events, so there may be cases where the Branch Dashboard cannot compare by the same dimensions for cost data vs install data.


### Troubleshooting deep linking

#### Intercepting Deep Links Before Branch

If you use Branch deep links in Facebook app ads, please check the following.

We recently discovered an issue where an app was calling Facebook's SDK to fetch the deferred app link within their iOS and Android app. Branch calls uses this same mechanism via a direct API integration, but if Facebook's SDK retrieves it before we do, Branch will not see any deep link data. Please ensure to comment out any calls to the following API within your app:

- [Android: fetchDeferredAppLink](https://developers.facebook.com/docs/reference/android/current/class/AppLinkData/)
- [iOS: fetchDeferredAppLink](https://developers.facebook.com/docs/reference/ios/current/class/FBSDKAppLinkUtility/)

#### Issues Reading Facebook App Links

If Facebook is having trouble reading the App Links from the Branch link, you might see messages like these while trying to test out the flow. This means that there is something corrupted in the OG tags causing Facebook to not parse your link.

<img src="/_assets/img/ingredients/deep-linked-ads/fb-ads-support/invalid-app-links-error.png" alt="Invalid App Links" class="left half">
<img src="/_assets/img/ingredients/deep-linked-ads/fb-ads-support/missing_applinks.png" alt="Troubleshooting" class="left">

**Rescrape the OG Tags**

You can test the OG tags using the [OG tag tester tool](https://developers.facebook.com/tools/debug/og/object) provided by Facebook:

1. Paste the Branch Link into the Input URL box.
1. Click on the Show existing scrape information button.
1. Examine errors regarding App Links from the output window.
1. Click on the Fetch New Scrape Information button. This last step typically resolves this problem if you are certain that your Branch Link Settings are correct.

!!! tip ""
	You can further automate the rescraping process by using this command after you create a new link and before you use it for any ads:

	``` sh
	curl --insecure "https://graph.facebook.com/?id=[YOUR-URL-TO-SCRAPE]&scrape=true"
	```

**If the OG tag tester continues to report problems**

1. Examine your [Link Settings](https://dashboard.branch.io/#/settings/link) and ensure that for all platforms (for which an app is available), that a URI scheme and a link to the app in the Play/App Store is configured. If you are using a Custom URL for your iOS Redirect, then you need to append `?id[10-digit App Store ID]` to the URL. This is necessary in order to fully generate the App Links and OG tags that the Facebook scraper expects to find.
    - For example, if your App Store URL is `https://itunes.apple.com/us/app/my-app-name/id1234567890`, then your Custom URL value should be `https://example.com?id1234567890`
1. If errors from the output window pertain to OG tags i.e. missing title, description etc. then examine link OG tags by appending `?debug=true` as described on the [Integration Testing page]({{base.url}}/getting-started/integration-testing/guide/#debugging-an-individual-link).
1. If you haven't set OG tags on a per link level, then please check your Dashboard's global Social Media Display Customization settings from the [Link Settings](https://dashboard.branch.io/#/settings/link) page.

**Use a direct deep link**

As a last resort, you can manually input a direct deep link. To retrieve this:

1. Go to Facebook's [Open Graph Object Debugger](https://developers.facebook.com/tools/debug/og/object/)
1. Input the Branch link you want to use for your ad
1. Click <notranslate>**Fetch new scrape information**</notranslate>
1. Find the `al:ios:url` line (it should look like `<meta property="al:ios:url" content="myapp://open?link_click_id=link-242052337263342024" />`)
1. Copy the value of this (`myapp://open?link_click_id=link-242052337263342024`) and input it as the Deep Link value of your ad

If none of these approaches work, please reach out to integrations@branch.io immediately.

#### Known Issue with App Restrictions

We recently discovered a bug within the Facebook system that prevents App Links from being read by the robot if you change any of these values from the defaults in your Advanced Facebook App Settings tab. Please make sure

- Contains Alcohol is set to <notranslate>**No**</notranslate>
- Age Restriction is set to <notranslate>**Anyone (13+)**</notranslate>
- Social Discovery is set to <notranslate>**Yes**</notranslate>
- Country Restricted is set to <notranslate>**No**</notranslate>

It has to look like this **exactly**:

![App Restrictions Troubleshooting](/_assets/img/ingredients/deep-linked-ads/fb-ads-support/app_restrictions.png)
