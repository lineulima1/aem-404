/*
 * ***********************************************************************
 * Angular App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Angular App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Angular App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Angular App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Angular App.
 * ***********************************************************************
 */

package com.angularapp.core.models;

import java.util.List;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.wcm.core.components.models.Image;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code MaincontentComponent} Sling Model used for the {@code angularapp/components/maincontent-component} component.
 * 
 */
@ConsumerType
public interface MaincontentComponent
    extends ComponentExporter
{


    List<header> getAttributes();

    @JsonProperty("buttonType")
    String getButtonType();

    @JsonProperty("buttonText")
    String getButtonText();

    @JsonProperty("imageSrc")
    Image getImageSrc();

    @JsonProperty("imageAlt")
    String getImageAlt();

}
