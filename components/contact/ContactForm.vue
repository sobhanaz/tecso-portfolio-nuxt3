<script setup></script>

<template>
    <div class="p-relative contact-form over-hidden section-padding">
        <div class="dsn-mask p-absolute w-70 left-0 top-0 h-100 background-section"></div>
        <div class="p-relative container d-grid grid-1-half" data-dsn-gap="30px 60px">
            <div class="box-form">
                <h2 class="title-h2">
                    <slot name="form_title" />
                </h2>
                <p class="mt-10">Fill fields and find approximate your repair</p>
                <div class="dsn-form mt-20 form-box d-flex flex-column">
                    <form id="contact-form" class="form w-100" method="post" action="contact.php"
                        data-toggle="validator">
                        <div class="messages"></div>
                        <div class="input__wrap controls">
                            <div class="d-grid grid-md-2" data-dsn-gap="0px 30px">
                                <div class="form-group dsn-up">
                                    <div class="entry-box">
                                        <input id="form_name" type="text" name="name" placeholder="Type your name"
                                            required="required" data-error="name is required." autocomplete="off" />
                                    </div>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group dsn-up">
                                    <div class="entry-box">
                                        <input id="form_email" type="email" name="email"
                                            placeholder="Type your Email Address" required="required"
                                            data-error="Valid email is required." autocomplete="off"/>
                                    </div>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="form-group dsn-up">
                                <div class="entry-box">
                                    <textarea id="form_message" class="form-control" name="message" rows="7"
                                        placeholder="Tell us about you and the world" required="required"
                                        data-error="Please,leave us a message."></textarea>
                                </div>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="d-flex dsn-up">
                                <div class="image-zoom move-circle border-color-default border-style border-rdu"
                                    data-dsn="parallax">
                                    <input type="submit" value="Send Message" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="box-info p-30 background-theme">
                <div class="icon-left dsn-icon-heading-color d-flex align-items-center h-100">
                    <div class="d-grid dsn-service icon-left align-items-center">
                        <div class="service-item p-relative grid-item style-box background-transparent">
                            <div class="service-item-inner number-item h-100">
                                <div class="dsn-icon">
                                    <font-awesome-icon :icon="['fas','map-marker-alt']" />
                                </div>
                                <div class="service-content p-relative">
                                    <h4 class="service_title sm-title-block">
                                        <slot name="address_title" />
                                    </h4>
                                    <div class="service_description mt-10 max-w570 dsn-auto">
                                        <p>
                                            <slot name="address" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="service-item p-relative grid-item style-box background-transparent">
                            <div class="service-item-inner number-item h-100">
                                <div class="dsn-icon">
                                    <font-awesome-icon :icon="['fas','phone-volume']" />
                                </div>
                                <div class="service-content p-relative">
                                    <h4 class="service_title sm-title-block">
                                        <slot name="phones_title" />
                                    </h4>
                                    <div class="service_description mt-10 max-w570 dsn-auto">
                                        <p>
                                            <slot name="phones" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="service-item p-relative grid-item style-box background-transparent">
                            <div class="service-item-inner number-item h-100">
                                <div class="dsn-icon">
                                    <font-awesome-icon :icon="['fas','envelope']" />
                                </div>
                                <div class="service-content p-relative">
                                    <h4 class="service_title sm-title-block">
                                        <slot name="email_title" />
                                    </h4>
                                    <div class="service_description mt-10 max-w570 dsn-auto">
                                        <p>
                                            <slot name="email" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
