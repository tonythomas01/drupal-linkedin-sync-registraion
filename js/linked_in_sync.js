/**
 * @file
 * Contains linked_in_sync.js.
 */

(function ($, Drupal, window, drupalSettings, document) {
    'use strict';

    // Datetime Range All Day.
    Drupal.behaviors.linked_in_sync = {
        attach: function (context, settings) {
            debugger
            $("#edit-konnect").on("click", function () {
                const linekdInClientId = drupalSettings.linkedInClientId;
                const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${linekdInClientId}&redirect_uri=http://hackathon.docker.localhost:8000/master-alumni/register/&state=fooobar&scope=r_liteprofile%20r_emailaddress`
                window.open(url, "_self");
            });

        }
    };
})(jQuery, Drupal, this, this.document);
