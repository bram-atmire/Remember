# Remember
A very simple website template to remember a loved one who passed away.

# Motivation
This template was built with following requirements in mind
* Free of ads FOREVER
* Runs on the simplest of webhosting. Should not require a database.
* A basic knowledge of HTML should be enough to configure the site within an hour

# Features
* Works on desktop and phones, thanks to Bootstrap
* Registry of condolences, thanks to htmlcommentbox.com
* Picture gallery based on a unique tag, thanks to Flickr.com

# Example sites
http://www.luytendenis.be

http://www.rikluyten.be

http://www.paulaspinoy.be

# Configuration
Copy the files from this repository to your simple web hosting and you're in business. It should be that simple. 

## Using the Dutch version of the website

1. remove the html files that DON'T have the _NL suffix
2. Now remove the _NL suffixes from the remaining NL files

## index.html - The homepage

1. Edit the menu by changing FIRSTNAME and LASTNAME to the name of your loved one.
2. If you don't want to use some of the pages, remove them from the navbar
3. After you're finished with the navbar, copy the navbar block from the index.html page and use it to replace
the navbar block on all other pages that you intend to use.
4. Replace the homepage picture in /images with an actual picture of your loved one. For the best result, use a 512x512 circle image. If you need some help creating that image and if you're on mac, you can find a Keynote template file in /templates.
5. Change the main body text with the first name of your loved one and update the date.

## funeral.html

This is a static page, where you can add details about the funeral.
On the example sites below, you can see how blockquotes were used to add texts that were said during the funeral and youtube embeds for any music that was played.

## photos.html

It's important to know that none of the pictures are stored on the actual website: we are pulling them from Flickr.com. This has several advantages:
1. Any friend or family can add pictures, without you having to act as the central webmaster to manage these pictures
2. You don't risk running out of storage on your webhosting when people add massive amounts of pictures.

Of course, the biggest downside is: if Flickr goes down, or changes its API, your pictures may become unavailable. 

Configuration:
1. Open /assets/js/gallery.js
2. Add your Flickr API key after getting one here https://www.flickr.com/services/api/misc.api_keys.html
3. Decide what the unique tag is you are going to use. It should be unique, because you don't want any random pictures entering the gallery of your loved one by accident. I have successfully used tags like "lastnamefirstname"
4. On photos.html, clarify to your users what the tag is they should use when uploading pictures to Flickr.com

## condolences.html - Registry of condolences

Update the name of your loved one in the introduction of the page.

This should just work without configuration but here are two things you may want to do:
1. Be default, an account on htmlcommentbox is not required. But that also means that nobody will have moderator rights to modify the comments. If you register on htmlcommentbox.com, you can get a moderator code and modify the embedding code so that you can moderate the comments. It also enables you to download all the entries as a spreadsheet.
2. If you are moving the website to another location, you will need to modify the PAGE variable to see the comments that were added before you moved the website.

## contact.html

Update the email address with an actual email address where people can reach the family.
